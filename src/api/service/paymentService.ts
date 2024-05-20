import axios from 'axios';

const baseURL = 'http://localhost:3000/pagbank-api';
const headers = {
  accept: 'application/json',
  'Content-Type': 'application/json'
};

const axiosInstance = axios.create({
  baseURL,
  headers
});

export async function createCheckout(checkoutObject: any) {
  try {
    const { data } = await axiosInstance.post(baseURL, checkoutObject);
    return data;
  } catch (error: any) {
    throw new Error(`Failed to create checkout: ${error}`);
  }
}

export async function getCheckoutInfo(checkoutId: string) {
  try {
    const { data } = await axiosInstance.get(`/checkouts/${checkoutId}`);
    return data;
  } catch (error: any) {
    console.error('Failed to get checkout info:', error);
    throw new Error(`Failed to get checkout info: ${error.message}`);
  }
}


// IF ERROR: OBJECT ->
// {
//   "error_messages": [
//     {
//       "error": "invalid_value",
//       "description": "Field has an invalid value, see documentation.",
//       "parameter_name": "customer.tax_id"
//     }
//   ]
// }

// IF SUCCESS: OBJECT ->
// {
//   "id": "CHEC_XXXX",
//   "reference_id": "REFERÊNCIA DO PRODUTO",
//   "expiration_date": "2023-08-14T19:09:10-03:00",
//   "created_at": "2023-06-14T16:34:30-03:00",
//   "status": "ACTIVE",
//   "customer": {
//     "name": "João Teste",
//     "email": "joao@teste.com",
//     "tax_id": "00000000000",
//     "phone": {
//       "country": "+55",
//       "area": "27",
//       "number": "999999999"
//     }
//   },
//   "customer_modifiable": true,
//   "items": [
//     {
//       "reference_id": "ITEM01",
//       "name": "Nome do Produto",
//       "quantity": 1,
//       "unit_amount": 500,
//       "image_url": "https://www.petz.com.br/blog//wp-content/upload/2018/09/tamanho-de-cachorro-pet-1.jpg"
//     }
//   ],
//   "additional_amount": 0,
//   "discount_amount": 0,
//   "shipping": {
//     "type": "FREE",
//     "amount": 0,
//     "address": {
//       "country": "BRA",
//       "region_code": "SP",
//       "city": "São Paulo",
//       "postal_code": "01452002",
//       "street": "Faria Lima",
//       "number": "1384",
//       "locality": "Pinheiros",
//       "complement": "5 andar"
//     },
//     "address_modifiable": true
//   },
//   "payment_methods": [
//     {
//       "type": "CREDIT_CARD",
//       "brands": [
//         "MASTERCARD",
//         "VISA"
//       ]
//     },
//     {
//       "type": "DEBIT_CARD",
//       "brands": [
//         "VISA"
//       ]
//     },
//     {
//       "type": "PIX"
//     },
//     {
//       "type": "BOLETO"
//     }
//   ],
//   "payment_methods_configs": [
//     {
//       "type": "CREDIT_CARD",
//       "config_options": [
//         {
//           "option": "INSTALLMENTS_LIMIT",
//           "value": "1"
//         }
//       ]
//     }
//   ],
//   "soft_descriptor": "xxxx",
//   "redirect_url": "https://pagseguro.uol.com.br",
//   "return_url": "https://pagseguro.uol.com.br",
//   "notification_urls": [
//     "https://pagseguro.uol.com.br"
//   ],
//   "payment_notification_urls": [
//     "https://pagseguro.uol.com.br"
//   ],
//   "links": [
//     {
//       "rel": "PAY",
//       "href": "https://pagamento.pagseguro.uol.com.br/pagamento?code=XXXX",
//       "method": "GET"
//     },
//     {
//       "rel": "SELF",
//       "href": "https://api.pagseguro.com/checkouts/CHEC_7A06F414-AC7F-4428-B27E-4BC853B8046B",
//       "method": "GET"
//     },
//     {
//       "rel": "INACTIVATE",
//       "href": "https://api.pagseguro.com/checkouts/CHEC_7A06F414-AC7F-4428-B27E-4BC853B8046B/inactivate",
//       "method": "POST"
//     }
//   ]
// }