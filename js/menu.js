var gui = require('nw.gui');
var win = gui.Window.get();

var menuBar = new gui.Menu({type: 'menubar'});
menuBar.createMacBuiltin('Address book');
win.menu = menuBar;

var developMenu = new gui.Menu();
var developToggleItem = new gui.MenuItem({
  label: 'Toggle Dev Tools',
  click: function() {
    if(win.isDevToolsOpen()) {
      win.closeDevTools();
    } else {
      win.showDevTools();
    }
  }
});

developMenu.append(developToggleItem);
win.menu.append(new gui.MenuItem({
  label: 'Develop',
  submenu: developMenu
}));
