/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
// https://html.spec.whatwg.org/multipage/dom.html#global-attributes
const UNSUPPORTED_PROPERTY_NAMES = [
  'accesskey', 
  'autocapitalize',
  'autocorrect',
  'autofocus',
  'contenteditable',
  'dir',
  'draggable',
  'enterkeyhint',
  'headingoffset',
  'headingreset',
  'hidden', 
  'inert',
  'inputmode',
  'is',
  'itemid',
  'itemprop',
  'itemref',
  'itemscope',
  'itemtype',
  'lang',
  'nonce',
  'popover',
  'spellcheck',
  'style',
  'tabindex',
  'title',
  'translate',
  'writingsuggestions'
];

export default {
  meta: {
    type: 'suggestion',
    messages: {
      unsupportedPropertyName: `Unsupported property decorator name '{{ name }}'. It may conflict with global attributes.
        Please consider renaming the property and check this link for more information: https://html.spec.whatwg.org/multipage/dom.html#global-attributes`,
    },
    fixable: 'code',
    schema: [], // no options
  },
  create: function (context) {
    return {
      Identifier: function (node) {
        if (node.name === 'property' 
          && node.parent?.parent?.type === 'Decorator' 
          && node.parent?.parent?.parent?.type === 'PropertyDefinition'
        ) {
          if (UNSUPPORTED_PROPERTY_NAMES.includes(node.parent?.parent?.parent?.key?.name)) {
            context.report({
              node,
              messageId: "unsupportedPropertyName",
              data: {
                name: node.parent.parent.parent.key.name,
              },
            });
          }
        }
      },
    };
  },
};
