import { Injectable } from '@angular/core';

@Injectable()
export class FieldService {

  // TODO: get from a remote source of field metadata
  // TODO: make asynchronous
  getFields() {

    let fields = `
    [  
      {  
         "key":"brave",
         "label":"Bravery Rating",
         "required":false,
         "order":3,
         "controlType":"dropdown",
         "options":[  
            {  
               "key":"solid",
               "value":"Solid"
            },
            {  
               "key":"great",
               "value":"Great"
            },
            {  
               "key":"good",
               "value":"Good"
            },
            {  
               "key":"unproven",
               "value":"Unproven"
            }
         ]
      },
      {  
         "value":"Bombasto",
         "key":"firstName",
         "label":"First name",
         "required":true,
         "order":1,
         "controlType":"textbox",
         "type":""
      },
      {  
        "value":"",
        "key":"password",
        "label":"Password",
        "required":false,
        "order":4,
        "controlType":"textbox",
        "type":"password"
     },
      {  
         "key":"emailAddress",
         "label":"Email",
         "required":false,
         "order":2,
         "controlType":"textbox",
         "type":"email"
      }
   ]
    `;

    return JSON.parse(fields).sort((a, b) => a.order - b.order);
  }
}
