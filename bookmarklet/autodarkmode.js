const O=['14DHDyYz','4kwtose','73037fdXOPv','7979tROKhI','style','55487buIebX','195751qatahO','5ADeNLf','14xSeMtS','createElement','innerHTML','28011tHBkYq','\x0a/*\x20\x0adark\x20mode\x20for\x20turntable.fm!\x0adims\x20all\x20the\x20brighter\x20colours\x20for\x20darker\x20colours.\x0areplaces\x20event\x20and\x20mention\x20colours\x20to\x20join\x20the\x20dark\x20side.\x0a\x0ado\x20not\x20edit\x20the\x20following\x20unless\x20you\x20know\x20what\x20you\x27re\x20doing.\x0aif\x20you\x20have\x20any\x20problems\x20come\x20find\x20me\x20on\x20tt.fm/chillout_music\x20<3\x20\x0a\x0a©\x20fluteds\x202021\x20|\x20fluted.xyz/s/6\x0aa\x20copy\x20of\x20the\x20MIT\x20license\x20can\x20be\x20found\x20at\x20/license\x0a*/\x0a\x0a/*\x20enables\x20dark\x20mode\x20when\x20OS\x20is\x20set\x20to\x20dark\x20mode\x20*/\x0a@media\x20(prefers-color-scheme:\x20dark)\x20{\x0a\x0a/*\x20background\x20*/\x0a.tab-pane,\x0a#songs,\x0a.header-bar,\x0a.tab-item:not(.selected),\x0a.room-info-intro,\x0a.message-history,\x0a.song-list,\x0a.guest-list,\x0a#buddyList,\x0a.sliding-nav-pane,\x0a.conversations-list,\x0a.guestOptionsContainer,\x0a.guestOptionsContainer\x20.options,\x0a.chat\x20.message:nth-child(even),\x0a.guest-list\x20>\x20:nth-child(even):not(.separator),\x0a.striped-list\x20>\x20:nth-child(even):not(.separator),\x0a.song-list\x20>\x20ul\x20>\x20:nth-child(even):not(.separator),\x0a.message-history\x20>\x20:nth-child(even):not(.separator)\x20{\x0a\x20\x20\x20\x20color:\x20#eaeaea\x20!important;\x0a\x20\x20\x20\x20background:\x20#3a3a3a\x20!important;\x0a\x20\x20\x20\x20border:\x20none;\x0a}\x0a\x0a.room-info-wrap,\x0a.flat-button,\x0a.guest-list,\x0a.guest\x20.chat\x20.message,\x0a.chat\x20.message:nth-child(odd),\x0a.guest-list\x20>\x20:nth-child(odd):not(.separator),\x0a.striped-list\x20>\x20:nth-child(odd):not(.separator),\x0a.song-list\x20>\x20ul\x20>\x20:nth-child(odd):not(.separator),\x0a.message-history\x20>\x20:nth-child(odd):not(.separator)\x20{\x0a\x20\x20\x20\x20color:\x20#eaeaea\x20!important;\x0a\x20\x20\x20\x20background:\x20#343434\x20!important;\x0a\x20\x20\x20\x20border:\x20none;\x0a}\x0a\x0a/*\x20border\x20colors\x20*/\x0a.flat-button,\x0a.message-view,\x0a.chat\x20.message,\x0a.striped-list,\x0a.song-list\x20.song,\x0a.room-info-intro,\x0a.room-info-wrap\x20{\x0a\x20\x20\x20\x20border-color:\x20rgba(84,\x2084,\x2084,\x200)\x20!important;\x0a}\x0a\x0a.conversation-view\x20{\x0a\x20\x20\x20\x20border-top:\x201px\x20solid\x20#545454\x20!important;\x0a}\x0a/*\x20scroll\x20*/\x0a::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20width:\x2010px;\x0a}\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20background:\x20#343434;\x0a}\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20background:\x20#545454;\x0a}\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20background:\x20#e1bb22;\x0a}\x0a\x0a/*\x20mentions\x20&\x20actions\x20*/\x0a.chat\x20.message.mention\x20{\x0a\x20\x20\x20\x20background:\x20#6e0504\x20!important;\x0a\x20\x20\x20\x20border-left:\x205px\x20solid\x20#e4c864\x20!important;\x0a}\x0a\x0a.chat\x20.message.action\x20{\x0a\x20\x20\x20\x20color:\x20rgb(237,\x20232,\x20232)\x20!important;\x0a\x20\x20\x20\x20background-color:\x20rgba(165,\x20161,\x20149,\x200.25)\x20!important;\x0a\x20\x20\x20\x20border-left:\x205px\x20solid\x20#c00000\x20!important;\x0a}\x0a\x0a/*\x20text\x20colours\x20*/\x0a.room-tab\x20.description-wrap,\x0a.room-tab\x20.room-info-link\x20h3\x20{\x0a\x20\x20\x20\x20color:\x20#eaeaea\x20!important;\x0a}\x0a\x0a/*\x20transparent\x20*/\x0a.avatar-head\x20{\x0a\x20\x20\x20\x20background-color:\x20transparent\x20!important;\x0a}\x0a\x0a/*\x203d\x20white\x20text\x20*/\x0a.sliding-nav-pane-title,\x0a.tabbed-panel\x20.separator\x20.text,\x0a.queue-message,\x0a.default-message,\x0a.room-tab\x20.room-name,\x0a.song\x20.title,\x0a#playlist-display\x20.text,\x0a.filter.btn,\x0a.message-view\x20a,\x0a.tabbed-panel\x20a,\x0a.tabbed-panel\x20a:visited\x20{\x0a\x20\x20\x20\x20color:\x20#e7d690\x20!important;\x0a\x20\x20\x20\x20text-shadow:\x200\x201px\x201px\x20#000\x20!important;\x0a}\x0a\x0a/*\x20underline\x20links\x20*/\x0a.message-view\x20a,\x0a.tabbed-panel\x20a,\x0a.tabbed-panel\x20a:visited\x20{\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20border-bottom:\x200px\x20dotted\x20!important;\x0a}\x0a\x0a/*\x20playlist\x20&\x20filters\x20*/\x0a.panel-button\x20{\x0a\x20\x20\x20\x20box-shadow:\x20none\x20!important;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#7b7b7b\x20!important;\x0a\x20\x20\x20\x20background:\x20linear-gradient(to\x20bottom,\x20#4a4a4a\x200,\x20#3a3a3a\x20100%)\x20!important;\x0a}\x0a\x0a.panel-button:not(:hover)\x20{\x0a\x20\x20\x20\x20opacity:\x200.8\x20!important;\x0a}\x0a\x0a/*\x20dark\x20buttons\x20*/\x0a.options-menu\x20.nib,\x0a.chatsound.mention,\x0a#upload-button\x20button,\x0a#playlist-display\x20.playlist-queue-inset\x20{\x0a\x20\x20\x20\x20filter:\x20invert(100%)\x20!important;\x0a}\x0a\x0a/*\x20input\x20bars\x20eg\x20text\x20&\x20search\x20*/\x0a.message-input-view,\x0a.floating-panel-bar,\x0a.floating-panel-header,\x0a.tabbed-panel\x20.separator,\x0a.sliding-nav-pane-header,\x0a.sliding-nav-pane\x20.separator\x20{\x0a\x20\x20\x20\x20box-shadow:\x20none\x20!important;\x0a\x20\x20\x20\x20border-top:\x200px\x20solid\x20#545454\x20!important;\x0a\x20\x20\x20\x20border-bottom:\x200px\x20solid\x20#353535\x20!important;\x0a\x20\x20\x20\x20background:\x20linear-gradient(to\x20bottom,\x20#3a3a3a,\x20#353535)\x20!important;\x0a}\x0a\x0a/*\x20input\x20buttons\x20eg\x20upload\x20*/\x0a.chatsound-container\x20{\x0a\x20\x20\x20\x20background:\x20transparent\x20!important;\x0a}\x0a\x0a#upload-button\x20button,\x0a.chatsound-container,\x0a.chatsound.mention\x20{\x0a\x20\x20\x20\x20box-shadow:\x20none\x20!important;\x0a\x20\x20\x20\x20border-color:\x20transparent\x20!important;\x0a}\x0a\x0a.chat-bar\x20.divider,\x0a#normal-mode\x20.divider\x20{\x0a\x20\x20\x20\x20display:\x20none\x20!important;\x0a}\x0a\x0a/*\x20chat\x20&\x20search\x20box\x20*/\x0a#chat-form\x20{\x0a\x20\x20\x20\x20left:\x2040px;\x0a}\x0a\x0a.message-input,\x0a#song-search-input\x20{\x0a\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#ffffff\x20!important;\x0a\x20\x20\x20\x20background:\x20#252525\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x201px\x20#545454,\x200\x201px\x200\x200\x20#545454\x20!important;\x0a}\x0a\x0a/*\x20PMs\x20*/\x0a#buddyListHeader\x20.options-menu\x20.nib,\x0a#buddyListHeader\x20.options-menu\x20.options\x20{\x0a\x20\x20\x20\x20border-radius:\x205px\x20!important;\x0a}\x0a#buddyListHeader\x20.options-menu\x20.nib\x20{\x0a\x20\x20\x20\x20border-color:\x20transparent\x20!important;\x0a\x20\x20\x20\x20background-color:\x20transparent\x20!important;\x0a}\x0a#buddyListHeader\x20.options-menu\x20.options\x20{\x0a\x20\x20\x20\x20top:\x20-85px\x20!important;\x0a\x20\x20\x20\x20right:\x20-5px\x20!important;\x0a\x20\x20\x20\x20}\x0a','8aHUrqD','966239QYJEVC','head','1XIAJsL','appendChild','16811KdivTV'];const w=function(l,S){l=l-0x107;let c=O[l];return c;};const j=w;(function(l,S){const Y=w;while(!![]){try{const c=parseInt(Y(0x10b))*-parseInt(Y(0x10f))+parseInt(Y(0x112))*-parseInt(Y(0x115))+-parseInt(Y(0x10a))*parseInt(Y(0x10d))+-parseInt(Y(0x10c))*parseInt(Y(0x111))+parseInt(Y(0x110))+parseInt(Y(0x117))*parseInt(Y(0x109))+-parseInt(Y(0x118))*-parseInt(Y(0x107));if(c===S)break;else l['push'](l['shift']());}catch(v){l['push'](l['shift']());}}}(O,0x322ad));const style=document[j(0x113)](j(0x10e));style[j(0x114)]=j(0x116),document[j(0x119)][j(0x108)](style);