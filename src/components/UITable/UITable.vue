<script setup lang="ts">
import { computed } from 'vue'

export interface UITableColumn {
  key: string
  label: string
  align?: 'left' | 'center' | 'right'
}

export type UITableRow = Record<string, unknown>

const props = withDefaults(
  defineProps<{
    columns: UITableColumn[]
    rows: UITableRow[]
    striped?: boolean
    compact?: boolean
    emptyText?: string
  }>(),
  {
    striped: false,
    compact: false,
    emptyText: 'データがありません',
  },
)

const cellPadding = computed(() => (props.compact ? 'px-3 py-2' : 'px-4 py-3'))

const alignClass = (align?: UITableColumn['align']) => {
  switch (align) {
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    default:
      return 'text-left'
  }
}
</script>

<template>
  <div
    class="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm dark:bg-[#181a1f]/80 dark:border-gray-800/80 dark:shadow-none"
  >
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-gray-50 dark:bg-white/5">
            <th
              v-for="col in props.columns"
              :key="col.key"
              scope="col"
              :class="[
                cellPadding,
                alignClass(col.align),
                'text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 whitespace-nowrap',
              ]"
            >
              <slot :name="`header-${col.key}`" :column="col">{{ col.label }}</slot>
            </th>
          </tr>
        </thead>
        <tbody v-if="props.rows.length > 0">
          <tr
            v-for="(row, rowIndex) in props.rows"
            :key="rowIndex"
            :class="[
              'border-t border-gray-100 dark:border-white/5 transition-colors hover:bg-gray-50 dark:hover:bg-white/5',
              props.striped ? 'odd:bg-gray-50/60 dark:odd:bg-white/[0.02]' : '',
            ]"
          >
            <td
              v-for="col in props.columns"
              :key="col.key"
              :class="[
                cellPadding,
                alignClass(col.align),
                'text-gray-900 dark:text-gray-200 whitespace-nowrap',
              ]"
            >
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]" :index="rowIndex">
                {{ row[col.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-if="props.rows.length === 0"
        class="px-4 py-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-white/5"
      >
        <slot name="empty">{{ props.emptyText }}</slot>
      </div>
    </div>
  </div>
</template>
