export const TOGGLE_SIDEBAR_STATUS = 'TOGGLE_SIDEBAR_STATUS'

interface ToggleSidebarStatus {
	type: 'TOGGLE_SIDEBAR_STATUS'
}

export type Actions = ToggleSidebarStatus

export const toggleSidebarStatus = (): ToggleSidebarStatus => ({
	type: TOGGLE_SIDEBAR_STATUS
})
