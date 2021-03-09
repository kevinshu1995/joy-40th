export default function Loading(options = { loadingWaiting: 10000 }) {
    this._el_loadingText = document.getElementById('loadingText')
    this._el_closeLoadingBtn = document.getElementById('closeLoading')
    this._el_loadingWrap = document.getElementById('loadingWrap')

    const waitingTime = options.loadingWaiting || 10000
    const vm = this

    this.init = (fn) => {
        // * 如果被 click 則執行 fn()
        const hideLoadingAndFn = () => {
            vm.loadingHide()
            if (fn !== undefined) fn()
        }

        if (vm._el_closeLoadingBtn)
            vm._el_closeLoadingBtn.addEventListener('click', hideLoadingAndFn)

        setTimeout(() => {
            vm.showClosingBtn()
        }, waitingTime)
    }

    this.loadingHide = () => {
        vm._el_loadingWrap.style.display = 'none'
    }

    this.showClosingBtn = () => {
        vm._el_loadingText.style.display = 'none'
        vm._el_closeLoadingBtn.style.display = 'block'
    }
}
