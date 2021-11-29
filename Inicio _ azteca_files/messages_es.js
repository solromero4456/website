'use strict';

try {
  angular.module('cartAppTranslations');
} catch (e) {
  angular.module('cartAppTranslations', ['pascalprecht.translate']);
}

angular.module('cartAppTranslations').config(['$translateProvider',
  function ($translateProvider) {
    var translations = {
      'cartWidget': {
        'sr': {
          'PRODUCT_PRICE_BEFORE_DISCOUNT': 'Precio',
          'PRODUCT_WAS_REMOVED': '{{ productName }} fue retirado del carrito',
          'PRODUCT_PRICE_WHEN_THERE_IS_NO_DISCOUNT': 'Precio',
          'PRODUCT_PRICE_AFTER_DISCOUNT': 'Precio de oferta'
        }
      },
      'CART_WIDGET_EMPTY_CART_MESSAGE': 'El carrito está vacío',
      'CART_WIDGET_CURRENCY_CONVERTER_DISCLAIMER': 'Procesado en {{mainCurrency}}',
      'CART_WIDGET_VIEW_CART_BUTTON': 'Ver carrito',
      'CART_WIDGET_CLOSE_CTA': 'Cerrar',
      'OUT_OF_STOCK_TITLE': 'Agotado',
      'CART_TABLE_TOTAL_TITLE': 'TOTAL',
      'CART_WIDGET_CLOSE_BUTTON_TITLE': 'Cerrar carrito',
      'SUBTOTAL_TITLE': 'Subtotal',
      'CART_WIDGET_QUANTITY_TITLE': 'Cant. ',
      'REMOVE_PRODUCT_BUTTON_TITLE': 'Eliminar artículo',
      'SKU_TITLE': 'SKU: {{ sku }}',
      'CART_WIDGET_CART_TITLE': 'Carrito'
    };
    $translateProvider.translations('es', translations);
    $translateProvider.translations(translations);
    $translateProvider.preferredLanguage('es');
  }
]);