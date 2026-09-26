/* Açaí da Hora — carrinho, checkout, horário comercial e inscrição opcional em novidades. */
let acaisCustomizados = [];

const translations = {
            pt: {
                selectLanguage: "Idioma / Language:",
                tagline: "O açaí mais cremoso da cidade!",
                option1Title: "Opção 1: Monte seu Açaí",
                step1Title: "1. Escolha o Tamanho",
                step2Title: "2. Acompanhamentos (9 Opções)",
                step3Title: "3. Frutas (4 Opções)",
                step4Title: "4. Coberturas (2 Opções)",
                option2Title: "Opção 2: Açaís Prontos",
                fromText: "A partir de",
                optNone: "-- Não adicionar --",
                pronto1Title: "1. Sensação",
                pronto3Title: "3. Arco-íris",
                pronto4Title: "4. Banana Crunch",
                option3Title: "Opção 3: Combos Especiais",
                comboCasalDesc: "2 Unidades com desconto",
                comboGalera: "2 Açaís Moranguinho",
                comboGaleraDesc: "2 Unidades com desconto",
                comboKidsDesc: "2 Unidades com desconto",
                checkoutTitle: "Finalizar Pedido",
                labelName: "Seu Nome:",
                placeholderName: "Digite seu nome",
                labelAddress: "Endereço de Entrega:",
                placeholderAddress: "Rua, Número, Bairro",
                labelPayment: "Forma de Pagamento:",
                pixBadge: "❖ PAGAMENTO ÚNICO VIA PIX",
                totalText: "Total:",
                btnOrder: "Enviar Pedido 🚀",
                itemLeitePo: "Leite em Pó",
                itemFarofa: "Farofa de amendoim",
                itemCoco: "Chocoball",
                itemBanana: "Banana",
                itemMorango: "Morango",
                itemUva: "Uva",
                itemLeiteCond: "Morango"
            },
            es: {
                selectLanguage: "Idioma / Language:",
                tagline: "¡El açaí más cremoso de la ciudad!",
                option1Title: "Opción 1: Arma tu Açaí",
                step1Title: "1. Elige el Tamaño",
                step2Title: "2. Acompañamientos (9 Opciones)",
                step3Title: "3. Frutas (4 Opciones)",
                step4Title: "4. Coberturas (2 Opciones)",
                option2Title: "Opción 2: Açaís Listos",
                fromText: "Desde",
                optNone: "-- No añadir --",
                pronto1Title: "1. Sensacíón",
                pronto3Title: "3. Arco-íris",
                pronto4Title: "4. Banana Crunch",
                option3Title: "Opción 3: Combos Especiales",
                comboCasalDesc: "2 Unidades con descuento",
                comboGalera: "2 Açaís Moranguinho",
                comboGaleraDesc: "2 Unidades con descuento",
                comboKidsDesc: "2 Unidades con descuento",
                checkoutTitle: "Finalizar Pedido",
                labelName: "Tu Nombre:",
                placeholderName: "Escribe tu nombre",
                labelAddress: "Dirección de Entrega:",
                placeholderAddress: "Calle, Número, Barrio",
                labelPayment: "Método de Pago:",
                pixBadge: "❖ PAGO ÚNICO VÍA PIX",
                totalText: "Total:",
                btnOrder: "Enviar Pedido 🚀",
                itemLeitePo: "Leche en Polvo",
                itemFarofa: "Cacahuate molido",
                itemCoco: "Chocoball",
                itemBanana: "Banana",
                itemMorango: "Fresa",
                itemUva: "Uva",
                itemLeiteCond: "Fresa"
            },
            en: {
                selectLanguage: "Language / Idioma:",
                tagline: "The creamiest açaí in town!",
                option1Title: "Option 1: Build Your Açaí",
                step1Title: "1. Choose Size",
                step2Title: "2. Toppings (9 Options)",
                step3Title: "3. Fruits (4 Options)",
                step4Title: "4. Syrups & Sauces (2 Options)",
                option2Title: "Option 2: Ready-Made Açaí",
                fromText: "From",
                optNone: "-- Do not add --",
                pronto1Title: "1. Sensação",
                pronto3Title: "3. Rainbow",
                pronto4Title: "4. Banana Crunch",
                option3Title: "Option 3: Special Combos",
                comboCasalDesc: "2 Units with discount",
                comboGalera: "2 Açaís Moranguinho",
                comboGaleraDesc: "2 Units with discount",
                comboKidsDesc: "2 Units with discount",
                checkoutTitle: "Checkout",
                labelName: "Your Name:",
                placeholderName: "Enter your name",
                labelAddress: "Delivery Address:",
                placeholderAddress: "Street, Number, Neighborhood",
                labelPayment: "Payment Method:",
                pixBadge: "❖ SINGLE PAYMENT VIA PIX",
                totalText: "Total:",
                btnOrder: "Send Order 🚀",
                itemLeitePo: "Milk Powder",
                itemFarofa: "Peanut Powder",
                itemCoco: "Chocoball",
                itemBanana: "Banana",
                itemMorango: "Strawberry",
                itemUva: "Grape",
                itemLeiteCond: "Strawberry"
            }
        };

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang] && translations[lang][key];
        if (translation) element.innerText = translation;
    });
}

function mostrarDetalhes(titulo, descricao) {
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalTexto').innerText = descricao;
    document.getElementById('modalDetalhes').style.display = 'flex';
}
function fecharModal() { document.getElementById('modalDetalhes').style.display = 'none'; }
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modalDetalhes');
    if (event.target === modal) fecharModal();
});

function dinheiroParaCentavos(valor) {
    const numero = Number.parseFloat(valor);
    return Number.isFinite(numero) ? Math.round(numero * 100) : 0;
}
function formatarReais(centavos) {
    return (centavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function quantidadeDoItem(selectId) {
    const campo = document.getElementById(`qtd_${selectId}`);
    return campo ? Number.parseInt(campo.value, 10) || 1 : 1;
}

function adicionarAcaiCustomizado() {
    const tamanho = document.querySelector('input[name="tamanho_custom"]:checked');
    if (!tamanho) { alert('Selecione o tamanho do Açaí!'); return; }
    const adicionais = [...document.querySelectorAll('.extra-item:checked')];
    const unitCents = dinheiroParaCentavos(tamanho.dataset.preco) + adicionais.reduce((sum, item) => sum + dinheiroParaCentavos(item.dataset.preco), 0);
    const quantidade = Number.parseInt(document.getElementById('qtd_custom').value, 10) || 1;
    acaisCustomizados.push({
        tamanho: tamanho.value,
        adicionais: adicionais.map((item) => item.value),
        quantidade,
        unitCents
    });
    tamanho.checked = false;
    adicionais.forEach((item) => { item.checked = false; });
    document.getElementById('qtd_custom').value = '1';
    renderizarAcaisCustomizados();
    calcularTotal();
}
function removerAcaiCustomizado(index) {
    acaisCustomizados.splice(index, 1);
    renderizarAcaisCustomizados();
    calcularTotal();
}
function renderizarAcaisCustomizados() {
    const container = document.getElementById('lista_custom_container');
    container.replaceChildren();
    acaisCustomizados.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'custom-item-card';
        const details = document.createElement('div');
        details.className = 'custom-item-info';
        const title = document.createElement('strong');
        title.textContent = `${item.quantidade}x Açaí ${item.tamanho} — ${formatarReais(item.unitCents * item.quantidade)}`;
        const addOns = document.createElement('small');
        addOns.style.color = '#ccc';
        addOns.textContent = `Adicionais: ${item.adicionais.length ? item.adicionais.join(', ') : 'Sem adicionais'}`;
        details.append(title, document.createElement('br'), addOns);
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'btn-remove-item';
        remove.textContent = 'Remover';
        remove.addEventListener('click', () => removerAcaiCustomizado(index));
        card.append(details, remove);
        container.appendChild(card);
    });
}

function coletarItensPedido() {
    const itens = [];
    acaisCustomizados.forEach((item, customIndex) => itens.push({
        tipo: 'montado', nome: `Açaí montado ${item.tamanho}`, tamanho: item.tamanho,
        adicionais: item.adicionais, quantidade: item.quantidade,
        unit_price_cents: item.unitCents, subtotal_cents: item.unitCents * item.quantidade,
        custom_index: customIndex
    }));
    document.querySelectorAll('.pronto-item').forEach((select) => {
        if (!select.value) return;
        const chosen = select.options[select.selectedIndex];
        const unit = dinheiroParaCentavos(select.dataset.base) + dinheiroParaCentavos(chosen.dataset.add);
        const quantity = quantidadeDoItem(select.id);
        const title = select.closest('.option-card').querySelector('strong').innerText.trim();
        itens.push({ tipo: 'pronto', nome: title, tamanho: select.value, quantidade: quantity, source_id: select.id,
            unit_price_cents: unit, subtotal_cents: unit * quantity });
    });
    document.querySelectorAll('.combo-item').forEach((select) => {
        if (!select.value) return;
        const chosen = select.options[select.selectedIndex];
        const unit = dinheiroParaCentavos(chosen.dataset.preco);
        const quantity = quantidadeDoItem(select.id);
        itens.push({ tipo: 'combo', nome: select.dataset.nome, opcao: select.value, quantidade: quantity, source_id: select.id,
            unit_price_cents: unit, subtotal_cents: unit * quantity });
    });
    return itens;
}
function calcularTotal() {
    const itens = coletarItensPedido();
    renderizarCarrinho(itens);
    const total = itens.reduce((sum, item) => sum + item.subtotal_cents, 0);
    document.getElementById('totalValue').innerText = formatarReais(total);
    return total;
}

function renderizarCarrinho(itens = coletarItensPedido()) {
    const container = document.getElementById('cartItems');
    if (!container) return;
    container.replaceChildren();
    if (itens.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'cart-empty-message';
        empty.textContent = 'Seu carrinho está vazio. Selecione um açaí ou combo.';
        container.appendChild(empty);
        return;
    }
    itens.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        const info = document.createElement('div');
        info.className = 'cart-item-info';
        const title = document.createElement('strong');
        const option = item.tamanho || item.opcao;
        title.textContent = `${item.quantidade}x ${item.nome}${option ? ` (${option})` : ''}`;
        const price = document.createElement('span');
        price.className = 'cart-item-price';
        price.textContent = formatarReais(item.subtotal_cents);
        info.append(title, price);
        if (item.adicionais?.length) {
            const extras = document.createElement('small');
            extras.textContent = `Adicionais: ${item.adicionais.join(', ')}`;
            info.appendChild(extras);
        }
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'btn-remove-item';
        remove.textContent = 'Remover';
        remove.setAttribute('aria-label', `Remover ${item.nome} do pedido`);
        remove.addEventListener('click', () => {
            if (item.tipo === 'montado') {
                removerAcaiCustomizado(item.custom_index);
                return;
            }
            const select = document.getElementById(item.source_id);
            if (select) select.value = '';
            const quantity = document.getElementById(`qtd_${item.source_id}`);
            if (quantity) quantity.value = '1';
            calcularTotal();
        });
        row.append(info, remove);
        container.appendChild(row);
    });
}

function atualizarFormaRecebimento() {
    const retirada = document.querySelector('input[name="recebimento"]:checked')?.value === 'retirada';
    const addressGroup = document.getElementById('deliveryAddressGroup');
    const addressInput = document.getElementById('endereco');
    const pickupCard = document.getElementById('pickupAddressCard');
    addressGroup.hidden = retirada;
    addressInput.required = !retirada;
    pickupCard.hidden = !retirada;
}
function preencherDadosLoja() {
    const config = window.LOJA_CONFIG || {};
    const instagram = document.getElementById('instagramLink');
    instagram.href = config.instagramUrl || 'https://www.instagram.com/';
    const address = config.storeAddress || 'Cadastre o endereço da loja no arquivo config.js.';
    document.getElementById('storeAddressText').textContent = address;
    document.getElementById('storeMapLink').href = config.storeMapUrl || 'https://maps.google.com/';
}

function getBusinessHoursState(now = new Date(), config = window.LOJA_CONFIG || {}) {
    const timeZone = config.businessTimeZone || 'America/Sao_Paulo';
    const weekdayOrder = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    const weekdayLabels = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    const intlWeekdayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dateParts = new Intl.DateTimeFormat('en-US', {
        timeZone,
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
    }).formatToParts(now);
    const parts = Object.fromEntries(dateParts.map((part) => [part.type, part.value]));
    const todayIndex = intlWeekdayOrder.indexOf(String(parts.weekday).toLowerCase());
    const nowMinutes = Number(parts.hour) * 60 + Number(parts.minute);
    const schedule = config.businessHours || {};
    const minutesFromTime = (time) => {
        const [hour, minute] = String(time || '').split(':').map(Number);
        return Number.isFinite(hour) && Number.isFinite(minute) ? hour * 60 + minute : NaN;
    };
    const formatTime = (time) => {
        const [hour, minute] = String(time || '').split(':');
        return minute === '00' ? `${Number(hour)}h` : `${Number(hour)}h${minute}`;
    };
    const todayKey = weekdayOrder[todayIndex];
    const todaySlots = Array.isArray(schedule[todayKey]) ? schedule[todayKey] : [];
    const currentSlot = todaySlots.find((slot) => {
        const open = minutesFromTime(slot.open);
        const close = minutesFromTime(slot.close);
        return nowMinutes >= open && nowMinutes < close;
    });
    if (currentSlot) {
        return { state: 'open', label: `Aberto agora · Fecha às ${formatTime(currentSlot.close)}` };
    }

    let nextOpening = null;
    for (let offset = 0; offset <= 7; offset += 1) {
        const dayIndex = (todayIndex + offset) % 7;
        const dayKey = weekdayOrder[dayIndex];
        const slots = Array.isArray(schedule[dayKey]) ? schedule[dayKey] : [];
        const nextSlot = slots.find((slot) => offset > 0 || minutesFromTime(slot.open) > nowMinutes);
        if (nextSlot) {
            nextOpening = { offset, dayIndex, open: nextSlot.open };
            break;
        }
    }
    if (!nextOpening) return { state: 'closed', label: 'Fechado agora · Consulte os horários' };
    const when = nextOpening.offset === 0
        ? 'hoje'
        : nextOpening.offset === 1
            ? 'amanhã'
            : `na ${weekdayLabels[nextOpening.dayIndex]}`;
    return { state: 'closed', label: `Fechado agora · Abre ${when} às ${formatTime(nextOpening.open)}` };
}

function formatBusinessTime(time) {
    const [hour, minute] = String(time || '').split(':');
    if (minute === '00') return `${Number(hour)}h`;
    return `${Number(hour)}h${minute}`;
}

function buildBusinessHoursSummary(config = window.LOJA_CONFIG || {}) {
    const weekdayOrder = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];
    const weekdayLabels = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
    const schedule = config.businessHours || {};
    const groups = new Map();
    weekdayOrder.forEach((day, index) => {
        const slots = Array.isArray(schedule[day]) ? schedule[day] : [];
        const hours = slots.length
            ? slots.map((slot) => `${formatBusinessTime(slot.open)}–${formatBusinessTime(slot.close)}`).join(', ')
            : 'fechado';
        if (!groups.has(hours)) groups.set(hours, []);
        groups.get(hours).push(weekdayLabels[index]);
    });
    return [...groups.entries()]
        .map(([hours, days]) => `${days.join(', ')}: ${hours}`)
        .join(' · ');
}

function atualizarStatusAtendimento() {
    const statusElement = document.getElementById('businessHoursStatus');
    const label = document.getElementById('businessHoursLabel');
    if (!statusElement || !label) return;
    const summary = document.getElementById('businessHoursSummary');
    if (summary) summary.textContent = `Atendimento: ${buildBusinessHoursSummary()}`;
    try {
        const result = getBusinessHoursState();
        statusElement.dataset.state = result.state;
        label.textContent = result.label;
    } catch (error) {
        statusElement.dataset.state = 'closed';
        label.textContent = 'Consulte os horários de atendimento';
        console.error('Não foi possível calcular o horário de atendimento:', error);
    }
}

async function salvarInscricaoNovidades(email) {
    const config = window.LOJA_CONFIG || {};
    if (!config.supabaseUrl || !config.supabaseAnonKey) {
        throw new Error('O cadastro ainda não está conectado ao banco.');
    }
    const baseUrl = config.supabaseUrl.replace(/\/$/, '');
    const response = await fetch(`${baseUrl}/rest/v1/newsletter_subscribers`, {
        method: 'POST',
        headers: {
            apikey: config.supabaseAnonKey,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal'
        },
        body: JSON.stringify({ email: email.toLowerCase(), marketing_consent: true })
    });
    if (response.status === 409) throw new Error('Este e-mail já está cadastrado para receber novidades.');
    if (!response.ok) throw new Error('Não foi possível salvar. Confirme se o SQL da lista de novidades já foi executado no Supabase.');
}

async function cadastrarParaNovidades(event) {
    event.preventDefault();
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('newsletterEmail');
    const consent = document.getElementById('newsletterConsent');
    const status = document.getElementById('newsletterStatus');
    const button = form.querySelector('button[type="submit"]');
    if (!consent.checked) {
        status.textContent = 'Marque a autorização para receber novidades antes de continuar.';
        return;
    }
    const email = emailInput.value.trim();
    if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
    }
    button.disabled = true;
    status.textContent = 'Salvando sua inscrição...';
    try {
        await salvarInscricaoNovidades(email);
        form.reset();
        status.textContent = 'Inscrição registrada. Obrigado! Para sair da lista, peça o cancelamento pelo WhatsApp da loja.';
    } catch (error) {
        status.textContent = error.message || 'Não foi possível salvar sua inscrição agora.';
        console.error('Erro ao cadastrar e-mail para novidades:', error);
    } finally {
        button.disabled = false;
    }
}

function alternarTutorial(aberto) {
    const panel = document.getElementById('helpTutorial');
    const button = document.getElementById('helpToggle');
    panel.hidden = !aberto;
    button.setAttribute('aria-expanded', String(aberto));
    if (aberto) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

async function salvarPedidoNoBanco(pedido) {
    const config = window.LOJA_CONFIG || {};
    if (!config.supabaseUrl || !config.supabaseAnonKey) return { saved: false, reason: 'not-configured' };
    const baseUrl = config.supabaseUrl.replace(/\/$/, '');
    const response = await fetch(`${baseUrl}/rest/v1/${encodeURIComponent(config.databaseTable || 'pedidos')}`, {
        method: 'POST',
        headers: {
            apikey: config.supabaseAnonKey,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal'
        },
        body: JSON.stringify(pedido)
    });
    if (!response.ok) throw new Error(`Supabase respondeu ${response.status}`);
    return { saved: true };
}

async function enviarPedido() {
    const nome = document.getElementById('nome').value.trim();
    const forma = document.querySelector('input[name="recebimento"]:checked')?.value || 'entrega';
    const endereco = document.getElementById('endereco').value.trim();
    const itens = coletarItensPedido();
    const totalCents = itens.reduce((sum, item) => sum + item.subtotal_cents, 0);
    if (!nome) { alert('Por favor, informe seu nome.'); return; }
    if (forma === 'entrega' && !endereco) { alert('Por favor, preencha seu endereço de entrega.'); return; }
    if (!itens.length || totalCents <= 0) { alert('Adicione pelo menos um item ao pedido!'); return; }

    const config = window.LOJA_CONFIG || {};
    const destino = forma === 'retirada' ? 'Retirada na loja' : `Entrega — ${endereco}`;
    let mensagem = `🍇 *NOVO PEDIDO - AÇAÍ DA HORA* 🍇\n\n`;
    mensagem += `👤 *Cliente:* ${nome}\n📍 *Recebimento:* ${destino}\n\n*ITENS DO PEDIDO:*\n`;
    itens.forEach((item) => {
        const adicionais = item.adicionais?.length ? ` | Adicionais: ${item.adicionais.join(', ')}` : '';
        const opcao = item.tamanho || item.opcao || '';
        mensagem += `• ${item.quantidade}x ${item.nome} ${opcao ? `(${opcao})` : ''}${adicionais} — ${formatarReais(item.subtotal_cents)}\n`;
    });
    mensagem += `\n💰 *Total:* ${formatarReais(totalCents)}\n💳 *Pagamento:* PIX\n`;
    mensagem += `⚠️ Seu pedido será confirmado após envio do comprovante de pagamento pelo WhatsApp.`;

    const phone = String(config.whatsapp || '').replace(/\D/g, '');
    if (!phone) { alert('Configure o número do WhatsApp no arquivo config.js.'); return; }
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;
    const whatsappWindow = window.open('about:blank', '_blank');
    const status = document.getElementById('databaseStatus');
    status.textContent = '';
    const pedido = {
        customer_name: nome,
        fulfilment_method: forma,
        delivery_address: forma === 'entrega' ? endereco : null,
        items: itens,
        total_cents: totalCents,
        payment_method: 'PIX',
        status: 'aguardando_comprovante'
    };
    try {
        const result = await salvarPedidoNoBanco(pedido);
        if (result.saved) status.textContent = 'Pedido registrado no banco de dados. Envie o comprovante pelo WhatsApp para confirmação.';
        else status.textContent = 'O banco ainda não está configurado; o pedido seguirá pelo WhatsApp normalmente.';
    } catch (error) {
        console.error('Não foi possível registrar o pedido no banco:', error);
        status.textContent = 'Não foi possível registrar no banco agora; o pedido seguirá pelo WhatsApp normalmente.';
    }
    if (whatsappWindow) whatsappWindow.location.href = whatsappUrl;
    else window.location.href = whatsappUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    preencherDadosLoja();
    atualizarStatusAtendimento();
    window.setInterval(atualizarStatusAtendimento, 60 * 1000);
    document.getElementById('helpToggle').addEventListener('click', () => alternarTutorial(document.getElementById('helpTutorial').hidden));
    document.getElementById('helpClose').addEventListener('click', () => alternarTutorial(false));
    document.querySelectorAll('input[name="recebimento"]').forEach((radio) => radio.addEventListener('change', atualizarFormaRecebimento));
    atualizarFormaRecebimento();
    document.querySelectorAll('.pronto-item, .combo-item, [id^="qtd_pronto_"], [id^="qtd_combo_"]').forEach((field) => field.addEventListener('change', calcularTotal));
    document.querySelectorAll('input[name="tamanho_custom"], .extra-item').forEach((field) => field.addEventListener('change', calcularTotal));
    calcularTotal();
    document.getElementById('newsletterForm').addEventListener('submit', cadastrarParaNovidades);
});
