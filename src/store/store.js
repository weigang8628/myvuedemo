import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './type-store.js'
Vue.use(Vuex)
// var getcurrentnav = JSON.parse(sessionStorage.getItem('CURRENT_NAV'))
// var gettabs = JSON.parse(sessionStorage.getItem('TABS'))
// var getcurrenttabname = JSON.parse(sessionStorage.getItem('CURRENT_TAB_NAME'))
// var menu = JSON.parse(sessionStorage.getItem('MENU'))
export default new Vuex.Store({
    state: {
        page: {
            currentnav: JSON.parse(sessionStorage.getItem('CURRENT_NAV')) || {},
            tabs:JSON.parse(sessionStorage.getItem('TABS'))  || [],
            currenttabname:JSON.parse(sessionStorage.getItem('CURRENT_TAB_NAME')) || '0',
            menu:JSON.parse(sessionStorage.getItem('MENU')) || []
            
        }
    },
    mutations: {
        [types.CURRENT_NAV](state, current) {
            state.page.currentnav = current
        },
        [types.TABS](state, current) {
            state.page.tabs = current
        },
        [types.CURRENT_TAB_NAME](state, current) {
            state.page.currenttabname = current
        },
        [types.MENU](state, current) {
            state.page.menu = current
        },
    },
    actions: {
        [types.CURRENT_NAV]({ commit }, current) {
            commit(types.CURRENT_NAV, current)
        },
        [types.TABS]({ commit }, current) {
            commit(types.TABS, current)
        },
        [types.CURRENT_TAB_NAME]({ commit }, current) {
            commit(types.CURRENT_TAB_NAME, current)
        },
        [types.MENU]({ commit }, current) {
            commit(types.MENU, current)
        },
    },
    getters: {
        ['GET_'+types.CURRENT_NAV](state) {
            return state.page.currentnav
        },
        ['GET_'+types.TABS](state) {
            return state.page.tabs
        },
        ['GET_'+types.CURRENT_TAB_NAME](state) {
            return state.page.currenttabname
        },
        ['GET_'+types.MENU](state) {
            return state.page.menu
        },
    }
})
