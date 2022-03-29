let DEFAULT_LANG = 'en';
let ALERT_TRANSLATION_INCOMPLETE = document.querySelector('#translatoin-incomplete');
let ALERT_TRANSLATION_UNAVAILABLE = document.querySelector('#translatoin-unavailable');
let DATA_LANG_ELEMENTS = document.querySelectorAll('[data-lang-str]');
let TRANSLATIONS = {
  'en': {
    'Homepage': 'Homepage',
    'Features': 'Features',
    'Pricing': 'Pricing',
    'Disabled': 'Disabled',
    'Email': 'Email',
    'Password': 'Password',
    'Address': 'Address',
    'City': 'City',
    'State': 'State',
    'Zip': 'Zip',
    'SendMeNewsletters': 'Send me newsletters'
  },
  'pt-br': {
    'Homepage': 'Pagina inicial',
    'Features': 'Características',
    'Pricing': 'Preços',
    'Disabled': 'Desativado',
    'Email': 'Email',
    'Password': 'Senha',
    'Address': 'Endereço',
    'City': 'Cidade',
    'State': 'Estado',
    'Zip': 'CEP',
    'SendMeNewsletters': 'Envie-me boletins informativos'
  },
  'es': {
    'Homepage': 'Página principal',
    'Features': 'Caracteristicas',
    'Pricing': 'Precio',
    'Disabled': 'Discapacitado',
    'Email': 'Email',
    'Password': 'Contraseña',
    'Address': 'Dirección',
    'City': 'Cidadde',
    'State': 'Estado',
    'Zip': 'CEP',
    'SendMeNewsletters': 'Envie-me boletins informativos'
  },
};


const translate = (lang = null) => {
  if (lang === null) {
    lang = DEFAULT_LANG;
  }
  let DEFAULT_LANG_LENGTH = Object.keys(TRANSLATIONS[DEFAULT_LANG]).length;
  // Verifica se o idioma selecionado existe.
  if (TRANSLATIONS[lang]) {
    // Existe... Agora verifica se a tradução selecionada está completa
    // Se não estiver exibe a mensagem.
    ALERT_TRANSLATION_UNAVAILABLE.style.display = 'none';
    let LANG_LENGTH = Object.keys(TRANSLATIONS[lang]).length;
    if (LANG_LENGTH < DEFAULT_LANG_LENGTH) {
      ALERT_TRANSLATION_INCOMPLETE.style.display = 'block';
    } else {
      ALERT_TRANSLATION_INCOMPLETE.style.display = 'none';
    }
    DATA_LANG_ELEMENTS.forEach((el) => {
      let STR = el.getAttribute('data-lang-str');
      if (TRANSLATIONS[lang][STR]) {
        el.innerText = (TRANSLATIONS[lang][STR]);
      }
    });
  } else {
    // Não existe, então exibe a mensagem
    ALERT_TRANSLATION_INCOMPLETE.style.display = 'none';
    ALERT_TRANSLATION_UNAVAILABLE.style.display = 'block';
  }
}

let BTNS_TRANSLATE = document.querySelectorAll('[name=btn-translate]');
BTNS_TRANSLATE.forEach((btn) => {
  btn.addEventListener('click', (ev) => {
    translate(btn.getAttribute('data-lang'));
  });
});

translate();