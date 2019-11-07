<template>
    <div
            class="el-tab-pane"
            v-if="(!lazy || loaded) || active"
            :style="getStyle"
            role="tabpanel"
            :aria-hidden="!active"
            :id="`pane-${paneName}`"
            :aria-labelledby="`tab-${paneName}`"
    >
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'LoElTabPane',
    componentName: 'LoElTabPane',
    props: {
      label: String,
      labelContent: Function,
      name: String,
      closable: Boolean,
      disabled: Boolean,
      lazy: Boolean
    },
    data() {
      return {
        index: null,
        loaded: false
      };
    },
    computed: {
      isClosable() {
        return this.closable || this.$parent.closable;
      },
      active() {
        const active = this.$parent.currentName === (this.name || this.index);
        if (active) {
          this.loaded = true;
        }
        return active;
      },
      paneName() {
        return this.name || this.index;
      },
      getStyle() {
        if (this.active) {
          return {};
        } else {
          if (this.paneName === 'zhengWen') {
            return {visibility: 'hidden', width: '0px', height: '0px', opacity: '0'};
          } else {
            return {display: 'none'};
          }
        }
      }
    },
    updated() {
      this.$parent.$emit('tab-nav-update');
    }
  };
</script>