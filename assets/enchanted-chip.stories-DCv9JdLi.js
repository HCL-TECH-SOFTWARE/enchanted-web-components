import{t as e,g as n,u as a}from"./tags-Dua8CojJ.js";import"./index-D8lDt7vn.js";import"./index-BNGnTAuZ.js";import"./iframe-DNG6NGwD.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-avatar-BUo04uat.js";import"./cssClassEnums-mKa0OyBd.js";import"./localization-Pwna_gtP.js";import"./index-CuTRIAwF.js";import"./tags-BViZhp05.js";const I={title:"Data display/enchanted-chip",component:"enchanted-chip",tags:["autodocs"],argTypes:{name:{control:{type:"text"},description:"The text label displayed on the chip. This is the primary content that identifies the chip.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},count:{control:{type:"number",min:0,max:99,step:1},description:"The numeric count displayed on the chip when showChipCount is enabled. Useful for showing quantities, notifications, or item counts. Limited to 0-99.",table:{category:"Content",type:{summary:"number"},defaultValue:{summary:"0"}}},showChipCount:{control:{type:"boolean"},description:"Controls visibility of the count badge. When enabled, displays the count value in a badge next to the chip name. RTL-aware positioning.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showAvatar:{control:{type:"boolean"},description:'Controls visibility of an avatar icon at the start of the chip. When enabled, displays a enchanted-avatar component with "avatar-icon" variant.',table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearIcon:{control:{type:"boolean"},description:"Controls visibility of a clear/remove icon. When enabled, displays a slotted clear icon that can be used to remove or dismiss the chip.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disables the chip, applying disabled styling and preventing interaction. Sets tabindex to -1 when true, making it non-focusable.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{name:"Chip Name",count:0,showChipCount:!1,showAvatar:!1,clearIcon:!1,disabled:!1},parameters:{docs:{description:{component:"Chip component for displaying compact elements with optional avatar, count badge, and clear icon. Supports disabled state and RTL text direction. Commonly used for tags, filters, or selected items."}}}},t={render:i=>a`
      <${e}
        .name=${i.name}
        .count=${i.count}
        .icon=${a`<${n("icon-checkmark")} size='16'></${n("icon-checkmark")}>`}
        ?showChipCount=${i.showChipCount}
        ?showAvatar=${i.showAvatar}
        ?clearIcon=${i.clearIcon}
        ?disabled=${i.disabled}
      >
        <div slot="clear-icon">
          <${n("icon-close")} size='16'></${n("icon-close")}>
        </div>
      </${e}>
    `,name:"Default"},o={render:()=>a`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h3>Basic Chips</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${e} .name=${"Basic Chip"}></${e}>
            <${e} .name=${"With Count"} .count=${5} ?showChipCount=${!0}></${e}>
            <${e} .name=${"High Count"} .count=${99} ?showChipCount=${!0}></${e}>
          </div>
        </div>

        <div>
          <h3>Chips with Avatar</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${e}
              .name=${"Avatar Chip"}
              .icon=${a`<${n("icon-checkmark")} size='16'></${n("icon-checkmark")}>`}
              ?showAvatar=${!0}>
            </${e}>
            <${e}
              .name=${"Avatar + Count"}
              .count=${12}
              .icon=${a`<${n("icon-checkmark")} size='16'></${n("icon-checkmark")}>`}
              ?showAvatar=${!0}
              ?showChipCount=${!0}>
            </${e}>
          </div>
        </div>

        <div>
          <h3>Chips with Clear Icon</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${e} .name=${"Clearable Chip"} ?clearIcon=${!0}>
              <div slot="clear-icon"><${n("icon-close")} size='16'></${n("icon-close")}></div>
            </${e}>
            <${e} .name=${"Clear + Count"} .count=${8} ?clearIcon=${!0} ?showChipCount=${!0}>
              <div slot="clear-icon"><${n("icon-close")} size='16'></${n("icon-close")}></div>
            </${e}>
            <${e}
              .name=${"Clear + Avatar"}
              ?clearIcon=${!0}
              .icon=${a`<${n("icon-checkmark")} size='16'></${n("icon-checkmark")}>`}
              ?showAvatar=${!0}>
              <div slot="clear-icon"><${n("icon-close")} size='16'></${n("icon-close")}></div>
            </${e}>
          </div>
        </div>

        <div>
          <h3>All Features Combined</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${e}
              .name=${"Full Featured"}
              .count=${25}
              .icon=${a`<${n("icon-checkmark")} size='16'></${n("icon-checkmark")}>`}
              ?showAvatar=${!0}
              ?showChipCount=${!0}
              ?clearIcon=${!0}
            >
              <div slot="clear-icon"><${n("icon-close")} size='16'></${n("icon-close")}></div>
            </${e}>
          </div>
        </div>

        <div>
          <h3>Disabled States</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${e} .name=${"Disabled Basic"} ?disabled=${!0}></${e}>
            <${e} .name=${"Disabled + Count"} .count=${7} ?disabled=${!0} ?showChipCount=${!0}></${e}>
            <${e}
              .name=${"Disabled + Avatar"}
              .icon=${a`<${n("icon-checkmark")} size='16'></${n("icon-checkmark")}>`}
              ?disabled=${!0}
              ?showAvatar=${!0}
            ></${e}>
            <${e} .name=${"Disabled + Clear"} ?disabled=${!0} ?clearIcon=${!0}>
              <div slot="clear-icon"><${n("icon-close")} size='16'></${n("icon-close")}></div>
            </${e}>
            <${e}
              .name=${"Disabled Full"}
              .count=${42}
              .icon=${a`<${n("icon-checkmark")} size='16'></${n("icon-checkmark")}>`}
              ?disabled=${!0}
              ?showAvatar=${!0}
              ?showChipCount=${!0}
              ?clearIcon=${!0}
            >
              <div slot="clear-icon"><${n("icon-close")} size='16'></${n("icon-close")}></div>
            </${e}>
          </div>
        </div>

        <div>
          <h3>Long Text Handling</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${e} .name=${"This is a chip with a very long name that might need handling"}></${e}>
            <${e}
              .name=${"Long Name with Features"}
              .count=${99}
              .icon=${a`<${n("icon-checkmark")} size='16'></${n("icon-checkmark")}>`}
              ?showAvatar=${!0}
              ?showChipCount=${!0}
              ?clearIcon=${!0}
            >
              <div slot="clear-icon"><${n("icon-close")} size='16'></${n("icon-close")}></div>
            </${e}>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all chip states and feature combinations. Demonstrates basic chips, chips with counts, avatars, clear icons, disabled states, and combinations of all features. Includes edge cases like high counts (99) and long text."}},controls:{disable:!0}}};var c,r,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_CHIP_TAG}
        .name=\${args.name}
        .count=\${args.count}
        .icon=\${html\`<\${generateIconTagName('icon-checkmark')} size='16'></\${generateIconTagName('icon-checkmark')}>\`}
        ?showChipCount=\${args.showChipCount}
        ?showAvatar=\${args.showAvatar}
        ?clearIcon=\${args.clearIcon}
        ?disabled=\${args.disabled}
      >
        <div slot="clear-icon">
          <\${generateIconTagName('icon-close')} size='16'></\${generateIconTagName('icon-close')}>
        </div>
      </\${ENCHANTED_CHIP_TAG}>
    \`;
  },
  name: 'Default'
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var l,$,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h3>Basic Chips</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <\${ENCHANTED_CHIP_TAG} .name=\${'Basic Chip'}></\${ENCHANTED_CHIP_TAG}>
            <\${ENCHANTED_CHIP_TAG} .name=\${'With Count'} .count=\${5} ?showChipCount=\${true}></\${ENCHANTED_CHIP_TAG}>
            <\${ENCHANTED_CHIP_TAG} .name=\${'High Count'} .count=\${99} ?showChipCount=\${true}></\${ENCHANTED_CHIP_TAG}>
          </div>
        </div>

        <div>
          <h3>Chips with Avatar</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <\${ENCHANTED_CHIP_TAG}
              .name=\${'Avatar Chip'}
              .icon=\${html\`<\${generateIconTagName('icon-checkmark')} size='16'></\${generateIconTagName('icon-checkmark')}>\`}
              ?showAvatar=\${true}>
            </\${ENCHANTED_CHIP_TAG}>
            <\${ENCHANTED_CHIP_TAG}
              .name=\${'Avatar + Count'}
              .count=\${12}
              .icon=\${html\`<\${generateIconTagName('icon-checkmark')} size='16'></\${generateIconTagName('icon-checkmark')}>\`}
              ?showAvatar=\${true}
              ?showChipCount=\${true}>
            </\${ENCHANTED_CHIP_TAG}>
          </div>
        </div>

        <div>
          <h3>Chips with Clear Icon</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <\${ENCHANTED_CHIP_TAG} .name=\${'Clearable Chip'} ?clearIcon=\${true}>
              <div slot="clear-icon"><\${generateIconTagName('icon-close')} size='16'></\${generateIconTagName('icon-close')}></div>
            </\${ENCHANTED_CHIP_TAG}>
            <\${ENCHANTED_CHIP_TAG} .name=\${'Clear + Count'} .count=\${8} ?clearIcon=\${true} ?showChipCount=\${true}>
              <div slot="clear-icon"><\${generateIconTagName('icon-close')} size='16'></\${generateIconTagName('icon-close')}></div>
            </\${ENCHANTED_CHIP_TAG}>
            <\${ENCHANTED_CHIP_TAG}
              .name=\${'Clear + Avatar'}
              ?clearIcon=\${true}
              .icon=\${html\`<\${generateIconTagName('icon-checkmark')} size='16'></\${generateIconTagName('icon-checkmark')}>\`}
              ?showAvatar=\${true}>
              <div slot="clear-icon"><\${generateIconTagName('icon-close')} size='16'></\${generateIconTagName('icon-close')}></div>
            </\${ENCHANTED_CHIP_TAG}>
          </div>
        </div>

        <div>
          <h3>All Features Combined</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <\${ENCHANTED_CHIP_TAG}
              .name=\${'Full Featured'}
              .count=\${25}
              .icon=\${html\`<\${generateIconTagName('icon-checkmark')} size='16'></\${generateIconTagName('icon-checkmark')}>\`}
              ?showAvatar=\${true}
              ?showChipCount=\${true}
              ?clearIcon=\${true}
            >
              <div slot="clear-icon"><\${generateIconTagName('icon-close')} size='16'></\${generateIconTagName('icon-close')}></div>
            </\${ENCHANTED_CHIP_TAG}>
          </div>
        </div>

        <div>
          <h3>Disabled States</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <\${ENCHANTED_CHIP_TAG} .name=\${'Disabled Basic'} ?disabled=\${true}></\${ENCHANTED_CHIP_TAG}>
            <\${ENCHANTED_CHIP_TAG} .name=\${'Disabled + Count'} .count=\${7} ?disabled=\${true} ?showChipCount=\${true}></\${ENCHANTED_CHIP_TAG}>
            <\${ENCHANTED_CHIP_TAG}
              .name=\${'Disabled + Avatar'}
              .icon=\${html\`<\${generateIconTagName('icon-checkmark')} size='16'></\${generateIconTagName('icon-checkmark')}>\`}
              ?disabled=\${true}
              ?showAvatar=\${true}
            ></\${ENCHANTED_CHIP_TAG}>
            <\${ENCHANTED_CHIP_TAG} .name=\${'Disabled + Clear'} ?disabled=\${true} ?clearIcon=\${true}>
              <div slot="clear-icon"><\${generateIconTagName('icon-close')} size='16'></\${generateIconTagName('icon-close')}></div>
            </\${ENCHANTED_CHIP_TAG}>
            <\${ENCHANTED_CHIP_TAG}
              .name=\${'Disabled Full'}
              .count=\${42}
              .icon=\${html\`<\${generateIconTagName('icon-checkmark')} size='16'></\${generateIconTagName('icon-checkmark')}>\`}
              ?disabled=\${true}
              ?showAvatar=\${true}
              ?showChipCount=\${true}
              ?clearIcon=\${true}
            >
              <div slot="clear-icon"><\${generateIconTagName('icon-close')} size='16'></\${generateIconTagName('icon-close')}></div>
            </\${ENCHANTED_CHIP_TAG}>
          </div>
        </div>

        <div>
          <h3>Long Text Handling</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <\${ENCHANTED_CHIP_TAG} .name=\${'This is a chip with a very long name that might need handling'}></\${ENCHANTED_CHIP_TAG}>
            <\${ENCHANTED_CHIP_TAG}
              .name=\${'Long Name with Features'}
              .count=\${99}
              .icon=\${html\`<\${generateIconTagName('icon-checkmark')} size='16'></\${generateIconTagName('icon-checkmark')}>\`}
              ?showAvatar=\${true}
              ?showChipCount=\${true}
              ?clearIcon=\${true}
            >
              <div slot="clear-icon"><\${generateIconTagName('icon-close')} size='16'></\${generateIconTagName('icon-close')}></div>
            </\${ENCHANTED_CHIP_TAG}>
          </div>
        </div>
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all chip states and feature combinations. Demonstrates basic chips, chips with counts, ' + 'avatars, clear icons, disabled states, and combinations of all features. Includes edge cases like high counts (99) and long text.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(d=($=o.parameters)==null?void 0:$.docs)==null?void 0:d.source}}};const w=["EnchantedChip","AllStates"];export{o as AllStates,t as EnchantedChip,w as __namedExportsOrder,I as default};
