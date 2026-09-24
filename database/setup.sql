-- A tabela recebe pedidos pelo site estático. Não permite leitura pública dos pedidos.
create table if not exists public.pedidos (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  customer_name text not null check (char_length(customer_name) between 1 and 120),
  fulfilment_method text not null check (fulfilment_method in ('entrega', 'retirada')),
  delivery_address text,
  items jsonb not null check (jsonb_typeof(items) = 'array' and jsonb_array_length(items) > 0),
  total_cents integer not null check (total_cents > 0),
  payment_method text not null check (payment_method = 'PIX'),
  status text not null default 'aguardando_comprovante' check (status = 'aguardando_comprovante'),
  constraint endereco_entrega_obrigatorio check (
    (fulfilment_method = 'entrega' and delivery_address is not null and char_length(trim(delivery_address)) > 0)
    or (fulfilment_method = 'retirada' and delivery_address is null)
  )
);

alter table public.pedidos enable row level security;
revoke all on table public.pedidos from anon, authenticated;
grant insert on table public.pedidos to anon;

-- A chave pública pode inserir somente dados que atendem às validações acima.
-- Não existe política SELECT/UPDATE/DELETE para visitantes do site.
drop policy if exists "visitante pode registrar pedido" on public.pedidos;
create policy "visitante pode registrar pedido"
  on public.pedidos for insert to anon
  with check (
    char_length(customer_name) between 1 and 120
    and fulfilment_method in ('entrega', 'retirada')
    and jsonb_typeof(items) = 'array'
    and jsonb_array_length(items) > 0
    and total_cents > 0
    and payment_method = 'PIX'
    and status = 'aguardando_comprovante'
  );
