import{x as e}from"./iframe-Dsd1MpWQ.js";import"./index-hIW8WEXr.js";import"./index-DBmzuMS8.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-C9dhstFR.js";import"./dx-avatar-CcPSZodn.js";import"./cssClassEnums-v1h5zF5X.js";import"./localization-DmqTGOFp.js";import"./index-BPZZDKKN.js";const w={title:"Data display/dx-chip",component:"dx-chip",tags:["autodocs"],argTypes:{name:{control:{type:"text"},description:"The text label displayed on the chip. This is the primary content that identifies the chip.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},count:{control:{type:"number",min:0,max:99,step:1},description:"The numeric count displayed on the chip when showChipCount is enabled. Useful for showing quantities, notifications, or item counts. Limited to 0-99.",table:{category:"Content",type:{summary:"number"},defaultValue:{summary:"0"}}},showChipCount:{control:{type:"boolean"},description:"Controls visibility of the count badge. When enabled, displays the count value in a badge next to the chip name. RTL-aware positioning.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showAvatar:{control:{type:"boolean"},description:'Controls visibility of an avatar icon at the start of the chip. When enabled, displays a dx-avatar component with "avatar-icon" variant.',table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearIcon:{control:{type:"boolean"},description:"Controls visibility of a clear/remove icon. When enabled, displays a slotted clear icon that can be used to remove or dismiss the chip.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disables the chip, applying disabled styling and preventing interaction. Sets tabindex to -1 when true, making it non-focusable.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{name:"Chip Name",count:0,showChipCount:!1,showAvatar:!1,clearIcon:!1,disabled:!1},parameters:{docs:{description:{component:"Chip component for displaying compact elements with optional avatar, count badge, and clear icon. Supports disabled state and RTL text direction. Commonly used for tags, filters, or selected items."}}}},n={render:i=>e`
      <dx-chip
        .name=${i.name}
        .count=${i.count}
        .icon=${e`<icon-checkmark size='16'></icon-checkmark>`}
        ?showChipCount=${i.showChipCount}
        ?showAvatar=${i.showAvatar}
        ?clearIcon=${i.clearIcon}
        ?disabled=${i.disabled}
      >
        <div slot="clear-icon">
          <icon-close size='16'></icon-close>
        </div>
      </dx-chip>
    `,name:"Default"},a={render:()=>e`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h3>Basic Chips</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=${"Basic Chip"}></dx-chip>
            <dx-chip .name=${"With Count"} .count=${5} ?showChipCount=${!0}></dx-chip>
            <dx-chip .name=${"High Count"} .count=${99} ?showChipCount=${!0}></dx-chip>
          </div>
        </div>

        <div>
          <h3>Chips with Avatar</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=${"Avatar Chip"} .icon=${e`<icon-checkmark size='16'></icon-checkmark>`} ?showAvatar=${!0}></dx-chip>
            <dx-chip .name=${"Avatar + Count"} .count=${12} .icon=${e`<icon-checkmark size='16'></icon-checkmark>`} ?showAvatar=${!0} ?showChipCount=${!0}></dx-chip>
          </div>
        </div>

        <div>
          <h3>Chips with Clear Icon</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=${"Clearable Chip"} ?clearIcon=${!0}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
            <dx-chip .name=${"Clear + Count"} .count=${8} ?clearIcon=${!0} ?showChipCount=${!0}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
            <dx-chip .name=${"Clear + Avatar"} ?clearIcon=${!0} .icon=${e`<icon-checkmark size='16'></icon-checkmark>`} ?showAvatar=${!0}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
          </div>
        </div>

        <div>
          <h3>All Features Combined</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=${"Full Featured"} .count=${25} .icon=${e`<icon-checkmark size='16'></icon-checkmark>`} ?showAvatar=${!0} ?showChipCount=${!0} ?clearIcon=${!0}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
          </div>
        </div>

        <div>
          <h3>Disabled States</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=${"Disabled Basic"} ?disabled=${!0}></dx-chip>
            <dx-chip .name=${"Disabled + Count"} .count=${7} ?disabled=${!0} ?showChipCount=${!0}></dx-chip>
            <dx-chip .name=${"Disabled + Avatar"} .icon=${e`<icon-checkmark size='16'></icon-checkmark>`} ?disabled=${!0} ?showAvatar=${!0}></dx-chip>
            <dx-chip .name=${"Disabled + Clear"} ?disabled=${!0} ?clearIcon=${!0}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
            <dx-chip
              .name=${"Disabled Full"}
              .count=${42}
              .icon=${e`<icon-checkmark size='16'></icon-checkmark>`}
              ?disabled=${!0}
              ?showAvatar=${!0}
              ?showChipCount=${!0}
              ?clearIcon=${!0}
            >
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
          </div>
        </div>

        <div>
          <h3>Long Text Handling</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=${"This is a chip with a very long name that might need handling"}></dx-chip>
            <dx-chip
              .name=${"Long Name with Features"}
              .count=${99}
              .icon=${e`<icon-checkmark size='16'></icon-checkmark>`}
              ?showAvatar=${!0}
              ?showChipCount=${!0}
              ?clearIcon=${!0}
            >
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all chip states and feature combinations. Demonstrates basic chips, chips with counts, avatars, clear icons, disabled states, and combinations of all features. Includes edge cases like high counts (99) and long text."}},controls:{disable:!0}}};var c,t,o;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-chip
        .name=\${args.name}
        .count=\${args.count}
        .icon=\${html\`<icon-checkmark size='16'></icon-checkmark>\`}
        ?showChipCount=\${args.showChipCount}
        ?showAvatar=\${args.showAvatar}
        ?clearIcon=\${args.clearIcon}
        ?disabled=\${args.disabled}
      >
        <div slot="clear-icon">
          <icon-close size='16'></icon-close>
        </div>
      </dx-chip>
    \`;
  },
  name: 'Default'
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var s,r,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h3>Basic Chips</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=\${'Basic Chip'}></dx-chip>
            <dx-chip .name=\${'With Count'} .count=\${5} ?showChipCount=\${true}></dx-chip>
            <dx-chip .name=\${'High Count'} .count=\${99} ?showChipCount=\${true}></dx-chip>
          </div>
        </div>

        <div>
          <h3>Chips with Avatar</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=\${'Avatar Chip'} .icon=\${html\`<icon-checkmark size='16'></icon-checkmark>\`} ?showAvatar=\${true}></dx-chip>
            <dx-chip .name=\${'Avatar + Count'} .count=\${12} .icon=\${html\`<icon-checkmark size='16'></icon-checkmark>\`} ?showAvatar=\${true} ?showChipCount=\${true}></dx-chip>
          </div>
        </div>

        <div>
          <h3>Chips with Clear Icon</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=\${'Clearable Chip'} ?clearIcon=\${true}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
            <dx-chip .name=\${'Clear + Count'} .count=\${8} ?clearIcon=\${true} ?showChipCount=\${true}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
            <dx-chip .name=\${'Clear + Avatar'} ?clearIcon=\${true} .icon=\${html\`<icon-checkmark size='16'></icon-checkmark>\`} ?showAvatar=\${true}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
          </div>
        </div>

        <div>
          <h3>All Features Combined</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=\${'Full Featured'} .count=\${25} .icon=\${html\`<icon-checkmark size='16'></icon-checkmark>\`} ?showAvatar=\${true} ?showChipCount=\${true} ?clearIcon=\${true}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
          </div>
        </div>

        <div>
          <h3>Disabled States</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=\${'Disabled Basic'} ?disabled=\${true}></dx-chip>
            <dx-chip .name=\${'Disabled + Count'} .count=\${7} ?disabled=\${true} ?showChipCount=\${true}></dx-chip>
            <dx-chip .name=\${'Disabled + Avatar'} .icon=\${html\`<icon-checkmark size='16'></icon-checkmark>\`} ?disabled=\${true} ?showAvatar=\${true}></dx-chip>
            <dx-chip .name=\${'Disabled + Clear'} ?disabled=\${true} ?clearIcon=\${true}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
            <dx-chip
              .name=\${'Disabled Full'}
              .count=\${42}
              .icon=\${html\`<icon-checkmark size='16'></icon-checkmark>\`}
              ?disabled=\${true}
              ?showAvatar=\${true}
              ?showChipCount=\${true}
              ?clearIcon=\${true}
            >
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
          </div>
        </div>

        <div>
          <h3>Long Text Handling</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <dx-chip .name=\${'This is a chip with a very long name that might need handling'}></dx-chip>
            <dx-chip
              .name=\${'Long Name with Features'}
              .count=\${99}
              .icon=\${html\`<icon-checkmark size='16'></icon-checkmark>\`}
              ?showAvatar=\${true}
              ?showChipCount=\${true}
              ?clearIcon=\${true}
            >
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </dx-chip>
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
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const y=["DxChip","AllStates"];export{a as AllStates,n as DxChip,y as __namedExportsOrder,w as default};
