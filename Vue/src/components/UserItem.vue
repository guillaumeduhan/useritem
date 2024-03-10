<script setup>
import { computed } from "vue"

const props = defineProps({
  avatar: {
    type: Boolean,
    default: true
  },
  avatarUrl: String,
  border: {
    type: Boolean,
    default: true
  },
  color: String,
  description: String,
  disabled: Boolean,
  loading: Boolean,
  width: {
    type: Number,
    default: 275
  },
  onClick: Function,
  online: Boolean,
  onlyAvatar: Boolean,
  reverse: Boolean,
  squared: Boolean,
  status: Boolean,
  shadow: Boolean,
  small: Boolean,
  style: Object,
  title: String,
  verified: Boolean
})

function onClickItem(e) {
  if (props.loading) return;
  if (props.onClick) return props.onClick(e);
}

function getInitials() {
  if (props.avatarUrl) return;
  const INITIALS = "AA";
  if (!props.title) return INITIALS;
  const words = props.title.split(" ");
  if (!words) return INITIALS;
  if (words.length === 0) return INITIALS;
  const initials = words.map(word => {
    if (word[0]) return word[0].toUpperCase();
  });
  return initials.join("");
}

function getSize() {
  return props.small ? '36px' : '48px'
}

const getAvatarStyle = computed(() => ({
  maxWidth: getSize(),
  minWidth: getSize(),
  maxHeight: getSize(),
  minHeight: getSize(),
  fontSize: props.small ? '14px' : '16px',
  backgroundColor: props.color || '#ccc',
  backgroundImage: `url(${props.avatarUrl})`,
  backgroundSize: "cover",
  borderRadius: props.squared ? '' : '100px',
}))

const getUserItemStyle = computed(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: props.onlyAvatar ? '' : '12px 14px',
  border: props.border && !props.onlyAvatar ? '1px solid #ccc' : '',
  borderRadius: props.squared ? '' : '8px',
  fontSize: props.small ? '14px' : '17px',
  flexDirection: props.reverse ? 'row-reverse' : 'row',
  boxShadow: props.shadow && props.border ? '-1px 0px 16px 0px rgba(0,0,0,0.05)' : '',
  width: `${props.onlyAvatar ? 'fit-content' : props.width + 'px'}`,
  maxWidth: '100%',
  ...props.style
}));

const getStatusStyle = computed(() => ({
  width: '14px',
  height: '14px',
  backgroundColor: props.online ? 'limegreen' : '#ccc',
  borderRadius: '14px',
  border: '2px solid white',
  position: 'absolute',
  bottom: props.squared ? '-6px' : 0,
  right: props.squared ? '-6px' : 0
}));

const getTitleStyle = computed(() => ({
  textAlign: props.reverse ? 'right' : 'left',
  flexDirection: props.reverse ? 'row-reverse' : 'row',
  width: 'calc(80%)'
}))
</script>

<template>
  <div :class="['useritem', disabled ? 'useritem--disabled' : '']" @click="onClickItem" :style="getUserItemStyle">
    <div v-if="avatar" style="position: relative;">
      <div class="useritem--avatar" :style="getAvatarStyle">
        {{ getInitials() }}
      </div>
      <div v-if="status" :style="getStatusStyle"></div>
    </div>
    <div v-if="!onlyAvatar" :style="getTitleStyle">
      <div v-if="title" class="useritem--title truncate" style="font-weight: 700;">
        {{ title }}
      </div>
      <div v-if="description" class="useritem--description truncate">
        {{ description }}
      </div>
    </div>
  </div>
</template>