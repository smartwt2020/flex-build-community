export default {
  computed: {
    device () {
      return this.$device
    },
    isMobile () {
      return this.$device.isMobileOrTablet
    },
    isDesktop () {
      return this.$device.isDesktop
    } 
  }
}


// context.isDesktop
// context.isMobile
// context.isTablet
// context.isMobileOrTablet
// context.isDesktopOrTablet
// context.isIos
// context.isWindows
// context.isMacOS
// context.isAndroid

// instance.$device.isDesktop
// instance.$device.isMobile
// instance.$device.isTablet
// instance.$device.isMobileOrTablet
// instance.$device.isDesktopOrTablet
// instance.$device.isIos
// instance.$device.isWindows
// instance.$device.isMacOS
// instance.$device.isAndroid