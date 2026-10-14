/* =========================================================
   SVG 图标
   ========================================================= */
const ICONS = {
  home:    '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  key:     '<rect x="2" y="6" width="20" height="13" rx="3"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/>',
  terminal:'<rect x="3" y="4" width="18" height="16" rx="2"/><polyline points="7 10 10 13 7 16"/><line x1="12" y1="16" x2="17" y2="16"/>',
  wrench:  '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  grid:    '<rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/>',
  disk:    '<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>',
  spark:   '<circle cx="12" cy="12" r="3.2"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
  code:    '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  gamepad: '<rect x="2" y="6" width="20" height="12" rx="6"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15.5" y1="12" x2="15.51" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".8"/><circle cx="17.5" cy="10.5" r=".8"/><circle cx="8.5" cy="7.5" r=".8"/><circle cx="6.5" cy="12.5" r=".8"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.63-.75 1.63-1.68 0-.4-.15-.78-.42-1.07-.26-.28-.42-.66-.42-1.05 0-.93.75-1.68 1.68-1.68H16c3.31 0 6-2.69 6-6 0-4.96-4.5-8.52-10-8.52z"/>',
  briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  star:    '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  info:    '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  copy:    '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  check:   '<polyline points="20 6 9 17 4 12"/>',
  cloud:   '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><line x1="8" y1="20" x2="16" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/>'
};

function icon(name, size, sw){
  size = size || 16; sw = sw || 2;
  const path = ICONS[name] || ICONS.info;
  return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size +
         '" fill="none" stroke="currentColor" stroke-width="' + sw +
         '" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>';
}

/* =========================================================
   分类
   ========================================================= */
const CATS = [
  {k:'home',   n:'首页',     i:'home'},
  {k:'key',    n:'快捷键',   i:'key'},
  {k:'cmd',    n:'CMD 指令', i:'terminal'},
  {k:'fix',    n:'维修装机', i:'wrench'},
  {k:'tool',   n:'在线工具', i:'grid'},
  {k:'sys',    n:'系统软件', i:'disk'},
  {k:'ai',     n:'AI 助手',  i:'spark'},
  {k:'dev',    n:'编程开发', i:'code'},
  {k:'game',   n:'游戏',     i:'gamepad'},
  {k:'design', n:'设计与建模',i:'palette'},
  {k:'office', n:'效率办公', i:'briefcase'}
];

/* =========================================================
   站点数据
   ========================================================= */
const SITES = [
  /* ================= 维修装机 ================= */
  // 硬件检测
  {n:'CPU-Z',           u:'https://www.cpuid.com/softwares/cpu-z.html', d:'CPU/主板/内存参数检测', c:'fix', g:'硬件检测'},
  {n:'GPU-Z',           u:'https://www.techpowerup.com/gpuz/',         d:'显卡详细参数与温度',   c:'fix', g:'硬件检测'},
  {n:'HWiNFO',          u:'https://www.hwinfo.com/',                   d:'专业硬件监控与传感器', c:'fix', g:'硬件检测'},
  {n:'AIDA64',          u:'https://www.aida64.com/',                   d:'整机测试与压力烤机',   c:'fix', g:'硬件检测'},
  {n:'CrystalDiskInfo', u:'https://crystalmark.info/en/software/crystaldiskinfo/', d:'硬盘健康度检测', c:'fix', g:'硬件检测'},
  {n:'CrystalDiskMark', u:'https://crystalmark.info/en/software/crystaldiskmark/', d:'硬盘读写速度测试', c:'fix', g:'硬件检测'},
  {n:'MemTest86',       u:'https://www.memtest86.com/',                d:'内存稳定性检测',       c:'fix', g:'硬件检测'},
  {n:'图吧工具箱',       u:'https://www.tbtool.cn/',                    d:'硬件检测工具合集',     c:'fix', g:'硬件检测'},
  {n:'鲁大师',          u:'https://www.ludashi.com/',                  d:'跑分与温度监控',       c:'fix', g:'硬件检测'},
  {n:'HD Tune',         u:'https://www.hdtune.com/',                   d:'硬盘健康与性能测试',   c:'fix', g:'硬件检测'},
  {n:'TechPowerUp',     u:'https://www.techpowerup.com/',              d:'显卡数据库与工具',     c:'fix', g:'硬件检测'},
  {n:'OCCT',            u:'https://www.ocbase.com/',                   d:'电源稳定性压力测试',   c:'fix', g:'硬件检测'},
  {n:'FurMark',         u:'https://geeks3d.com/furmark/',              d:'显卡烤机测试',         c:'fix', g:'硬件检测'},
  {n:'Prime95',         u:'https://www.mersenne.org/download/',        d:'CPU 压力测试',         c:'fix', g:'硬件检测'},
  {n:'Cinebench',       u:'https://www.maxon.net/cinebench',           d:'CPU 渲染性能测试',     c:'fix', g:'硬件检测'},
  {n:'Core Temp',       u:'https://www.alcpu.com/CoreTemp/',           d:'CPU 核心温度监控',     c:'fix', g:'硬件检测'},
  {n:'HWMonitor',       u:'https://www.cpuid.com/softwares/hwmonitor.html', d:'硬件温度电压监控', c:'fix', g:'硬件检测'},

  // 系统安装
  {n:'微PE工具箱',       u:'https://www.wepe.com.cn/',                  d:'干净无捆绑的 PE 系统', c:'fix', g:'系统安装'},
  {n:'Ventoy',          u:'https://www.ventoy.net/cn/',                d:'一个 U 盘装多个系统镜像', c:'fix', g:'系统安装'},
  {n:'Rufus',           u:'https://rufus.ie/zh/',                      d:'启动盘制作工具',       c:'fix', g:'系统安装'},
  {n:'WinNTSetup',      u:'https://msfn.org/board/topic/149612-winntsetup-v520/', d:'硬盘直接安装系统', c:'fix', g:'系统安装'},
  {n:'EasyU',           u:'https://www.upe.net/',                      d:'优启通 PE 工具箱',     c:'fix', g:'系统安装'},
  {n:'MSDN我告诉你',     u:'https://next.itellyou.cn/',                 d:'原版系统镜像下载',     c:'fix', g:'系统安装'},
  {n:'UUP dump',        u:'https://uupdump.net/',                      d:'微软官方原版镜像',     c:'fix', g:'系统安装'},
  {n:'微软官方镜像',     u:'https://www.microsoft.com/zh-cn/software-download/windows11', d:'Win11 官方下载', c:'fix', g:'系统安装'},
  {n:'大白菜',           u:'https://www.dabaicai.com/',                 d:'U 盘启动盘制作',       c:'fix', g:'系统安装'},
  {n:'老毛桃',           u:'https://www.laomaotao.net/',                d:'U 盘启动盘工具',       c:'fix', g:'系统安装'},
  {n:'冰封U盘启动',      u:'https://www.bfgho.com/',                    d:'冰封 PE 工具箱',       c:'fix', g:'系统安装'},
  {n:'HotPE',           u:'https://www.hotpe.top/',                    d:'开源 PE 工具箱',       c:'fix', g:'系统安装'},

  // 驱动工具
  {n:'驱动精灵',         u:'https://www.drivergenius.com/',             d:'驱动安装与修复',       c:'fix', g:'驱动工具'},
  {n:'驱动人生',         u:'https://www.160.com/',                      d:'驱动管理与备份',       c:'fix', g:'驱动工具'},
  {n:'驱动总裁',         u:'https://www.sysceo.com/',                   d:'离线驱动包',           c:'fix', g:'驱动工具'},
  {n:'360驱动大师',      u:'https://dm.weishi.360.cn/',                 d:'360 出品驱动工具',     c:'fix', g:'驱动工具'},
  {n:'Driver Booster',  u:'https://www.iobit.com/en/driver-booster.php',d:'IObit 驱动更新工具',  c:'fix', g:'驱动工具'},
  {n:'Snappy Driver',   u:'https://sdi-tool.org/',                     d:'开源离线驱动包',       c:'fix', g:'驱动工具'},

  // 数据恢复
  {n:'DiskGenius',      u:'https://www.diskgenius.cn/',                d:'分区管理与数据恢复',   c:'fix', g:'数据恢复'},
  {n:'Recuva',          u:'https://www.ccleaner.com/recuva',           d:'文件误删恢复',         c:'fix', g:'数据恢复'},
  {n:'DMDE',            u:'https://dmde.com/',                         d:'专业磁盘数据恢复',     c:'fix', g:'数据恢复'},
  {n:'EasyRecovery',    u:'https://www.ontrack.com/zh-cn/products/easyrecovery', d:'数据恢复套件', c:'fix', g:'数据恢复'},
  {n:'R-Studio',        u:'https://www.r-studio.com/',                 d:'专业级数据恢复',       c:'fix', g:'数据恢复'},
  {n:'数据蛙恢复专家',    u:'https://www.shujuwa.net/',                  d:'国产数据恢复工具',     c:'fix', g:'数据恢复'},
  {n:'超级硬盘恢复',      u:'https://www.crsky.com/',                    d:'磁盘数据恢复',         c:'fix', g:'数据恢复'},

  // 远程协助
  {n:'ToDesk',          u:'https://www.todesk.com/',                   d:'远程控制与文件传输',   c:'fix', g:'远程协助'},
  {n:'向日葵',           u:'https://sunlogin.oray.com/',                d:'远程协助与远程开机',   c:'fix', g:'远程协助'},
  {n:'AnyDesk',         u:'https://anydesk.com/zhs',                   d:'轻量远程桌面',         c:'fix', g:'远程协助'},
  {n:'TeamViewer',      u:'https://www.teamviewer.com/cn/',            d:'国际知名远程工具',     c:'fix', g:'远程协助'},
  {n:'RustDesk',        u:'https://rustdesk.com/zh/',                  d:'开源自建远程桌面',     c:'fix', g:'远程协助'},
  {n:'微软远程桌面',     u:'https://learn.microsoft.com/zh-cn/windows-server/remote/remote-desktop-services/', d:'Windows 自带远程', c:'fix', g:'远程协助'},

  // 系统优化
  {n:'Dism++',          u:'https://github.com/Chuyu-Team/Dism-Multi-language', d:'系统镜像管理工具', c:'fix', g:'系统优化'},
  {n:'CCleaner',        u:'https://www.ccleaner.com/',                 d:'系统清理与优化',       c:'fix', g:'系统优化'},
  {n:'火绒安全',         u:'https://www.huorong.cn/',                   d:'干净轻量的杀毒软件',   c:'fix', g:'系统优化'},
  {n:'Autoruns',        u:'https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns', d:'启动项深度管理', c:'fix', g:'系统优化'},
  {n:'HiBit Uninstaller',u:'https://www.hibitsoft.ir/Uninstaller.html',d:'强力卸载工具',        c:'fix', g:'系统优化'},
  {n:'软媒魔方',         u:'https://mofang.ruanmei.com/',              d:'系统优化与美化',       c:'fix', g:'系统优化'},
  {n:'Advanced SystemCare',u:'https://www.iobit.com/en/advancedsystemcarefree.php',d:'IObit 系统优化',c:'fix', g:'系统优化'},
  {n:'Wise Care 365',   u:'https://www.wisecleaner.com/wise-care-365.html',d:'系统清理优化',   c:'fix', g:'系统优化'},

  // 硬件报价
  {n:'中关村在线',       u:'https://www.zol.com.cn/',                   d:'硬件报价与参数查询',   c:'fix', g:'硬件报价'},
  {n:'太平洋电脑网',     u:'https://www.pconline.com.cn/',              d:'硬件评测与产品库',     c:'fix', g:'硬件报价'},
  {n:'京东装机',         u:'https://diy.jd.com/',                       d:'在线选配装机方案',     c:'fix', g:'硬件报价'},
  {n:'PCPartPicker',    u:'https://pcpartpicker.com/',                 d:'全球装机配置对比',     c:'fix', g:'硬件报价'},
  {n:'快科技',           u:'https://www.mydrivers.com/',                d:'硬件资讯与评测',       c:'fix', g:'硬件报价'},
  {n:'泡泡网',           u:'https://www.pcpop.com/',                    d:'IT 资讯与产品评测',    c:'fix', g:'硬件报价'},
  {n:'天极网',           u:'https://www.yesky.com/',                    d:'IT 资讯与评测',        c:'fix', g:'硬件报价'},

  /* ================= 在线工具 ================= */
  // 文本处理
  {n:'字数统计',         u:'https://tool.lu/wordcount/',                d:'统计字数与字符数',     c:'tool', g:'文本处理'},
  {n:'大小写转换',       u:'https://tool.lu/case/',                    d:'大小写快速转换',       c:'tool', g:'文本处理'},
  {n:'Base64',          u:'https://base64.us/',                        d:'Base64 编解码',        c:'tool', g:'文本处理'},
  {n:'URL 编解码',       u:'https://www.urlencoder.org/',               d:'URL 转义与还原',       c:'tool', g:'文本处理'},
  {n:'文本对比',         u:'https://www.diffchecker.com/zh/',           d:'两段文本差异对比',     c:'tool', g:'文本处理'},
  {n:'Markdown 编辑器',  u:'https://markdown.com.cn/editor/',           d:'在线 Markdown 编辑',   c:'tool', g:'文本处理'},
  {n:'去重工具',         u:'https://tool.lu/deduplication/',            d:'多行文本去重',         c:'tool', g:'文本处理'},
  {n:'空白字符清理',     u:'https://tool.lu/texttrim/',                 d:'去掉多余空格换行',     c:'tool', g:'文本处理'},
  {n:'中文简繁转换',     u:'https://tool.lu/zhconvert/',                d:'简体繁体互换',         c:'tool', g:'文本处理'},
  {n:'拼音转换',         u:'https://tool.lu/pinyin/',                   d:'汉字转拼音',           c:'tool', g:'文本处理'},

  // 开发工具
  {n:'JSON 格式化',      u:'https://www.json.cn/',                      d:'JSON 校验与格式化',    c:'tool', g:'开发工具'},
  {n:'正则测试',         u:'https://regex101.com/',                     d:'正则表达式在线调试',   c:'tool', g:'开发工具'},
  {n:'时间戳转换',       u:'https://tool.lu/timestamp/',                d:'Unix 时间戳互转',      c:'tool', g:'开发工具'},
  {n:'UUID 生成',        u:'https://www.uuidgenerator.net/',            d:'生成通用唯一识别码',   c:'tool', g:'开发工具'},
  {n:'JWT 解析',         u:'https://jwt.io/',                           d:'在线解析 JWT 令牌',    c:'tool', g:'开发工具'},
  {n:'颜色转换',         u:'https://www.colorhexa.com/',                d:'十六进制与 RGB 互转',  c:'tool', g:'开发工具'},
  {n:'Cron 表达式',      u:'https://crontab.guru/',                     d:'Cron 表达式解析',      c:'tool', g:'开发工具'},
  {n:'哈希计算',         u:'https://emn178.github.io/online-tools/',    d:'MD5/SHA 在线计算',     c:'tool', g:'开发工具'},
  {n:'二维码生成',       u:'https://cli.im/',                           d:'二维码在线生成',       c:'tool', g:'开发工具'},
  {n:'YAML 格式化',      u:'https://tool.lu/yaml/',                     d:'YAML 校验与格式化',    c:'tool', g:'开发工具'},
  {n:'XML 格式化',       u:'https://tool.lu/xml/',                      d:'XML 格式化与校验',     c:'tool', g:'开发工具'},
  {n:'代码对比',         u:'https://tool.lu/codediff/',                 d:'代码差异对比',         c:'tool', g:'开发工具'},

  // 图片处理
  {n:'TinyPNG',         u:'https://tinypng.com/',                      d:'图片无损压缩',         c:'tool', g:'图片处理'},
  {n:'Remove.bg',       u:'https://www.remove.bg/zh',                  d:'AI 一键抠图',          c:'tool', g:'图片处理'},
  {n:'Cleanup.pictures',u:'https://cleanup.pictures/',                 d:'图片去除杂物',         c:'tool', g:'图片处理'},
  {n:'Photopea',        u:'https://www.photopea.com/',                 d:'浏览器里的 PS',        c:'tool', g:'图片处理'},
  {n:'Pixlr',           u:'https://pixlr.com/cn/',                     d:'在线图片编辑',         c:'tool', g:'图片处理'},
  {n:'Squoosh',         u:'https://squoosh.app/',                      d:'图片压缩与格式转换',   c:'tool', g:'图片处理'},
  {n:'iLoveIMG',        u:'https://www.iloveimg.com/zh-cn',            d:'图片批量处理',         c:'tool', g:'图片处理'},
  {n:'ICO 生成',         u:'https://www.ico51.cn/',                     d:'图片转 ICO 图标',      c:'tool', g:'图片处理'},
  {n:'图片拼接',         u:'https://www.fotor.com/cn/',                 d:'图片在线拼接',         c:'tool', g:'图片处理'},
  {n:'图片加字',         u:'https://www.gaitubao.com/',                 d:'图片在线加字',         c:'tool', g:'图片处理'},
  {n:'GIF 工具',         u:'https://tool.lu/gif/',                      d:'GIF 制作与编辑',       c:'tool', g:'图片处理'},
  {n:'图像识别 OCR',     u:'https://tool.lu/ocr/',                      d:'图片文字识别',         c:'tool', g:'图片处理'},

  // 文件转换
  {n:'iLovePDF',        u:'https://www.ilovepdf.com/zh-cn',            d:'PDF 合并/转换/压缩',   c:'tool', g:'文件转换'},
  {n:'PDF24',           u:'https://www.pdf24.org/zh/',                 d:'免费 PDF 工具箱',      c:'tool', g:'文件转换'},
  {n:'CloudConvert',    u:'https://cloudconvert.com/',                 d:'任意格式在线转换',     c:'tool', g:'文件转换'},
  {n:'Convertio',       u:'https://convertio.co/zh/',                  d:'文档/图片/音视频转换', c:'tool', g:'文件转换'},
  {n:'视频压缩',         u:'https://www.videosmaller.com/cn/',          d:'在线视频压缩',         c:'tool', g:'文件转换'},
  {n:'音频转换',         u:'https://convertio.co/zh/audio-converter/',  d:'音频格式互转',         c:'tool', g:'文件转换'},
  {n:'GIF 制作',         u:'https://www.tutieshi.com/',                 d:'视频转 GIF',           c:'tool', g:'文件转换'},
  {n:'Word 转 PDF',     u:'https://www.ilovepdf.com/zh-cn/word_to_pdf', d:'Word 在线转 PDF',      c:'tool', g:'文件转换'},
  {n:'Excel 转 PDF',    u:'https://www.ilovepdf.com/zh-cn/excel_to_pdf',d:'Excel 在线转 PDF',     c:'tool', g:'文件转换'},
  {n:'PPT 转 PDF',      u:'https://www.ilovepdf.com/zh-cn/powerpoint_to_pdf', d:'PPT 在线转 PDF', c:'tool', g:'文件转换'},
  {n:'电子书转换',       u:'https://convertio.co/zh/ebook-converter/',  d:'epub/mobi 互转',       c:'tool', g:'文件转换'},

  // 实用工具
  {n:'腾讯文档',         u:'https://docs.qq.com/',                      d:'在线协作文档表格',     c:'tool', g:'实用工具'},
  {n:'临时邮箱',         u:'https://temp-mail.org/zh/',                 d:'接收临时邮件',         c:'tool', g:'实用工具'},
  {n:'Privnote',        u:'https://privnote.com/',                     d:'阅后即焚便签',         c:'tool', g:'实用工具'},
  {n:'单位换算',         u:'https://www.convertworld.com/zh-hans/',     d:'长度/重量/温度等换算', c:'tool', g:'实用工具'},
  {n:'汇率换算',         u:'https://www.xe.com/zh-CN/currencyconverter/',d:'实时汇率换算',        c:'tool', g:'实用工具'},
  {n:'日历',             u:'https://www.timeanddate.com/calendar/',     d:'万年历与世界时间',     c:'tool', g:'实用工具'},
  {n:'VirusTotal',      u:'https://www.virustotal.com/',               d:'文件与网址多引擎查毒', c:'tool', g:'实用工具'},
  {n:'IP 查询',          u:'https://www.ip138.com/',                    d:'IP 归属地查询',        c:'tool', g:'实用工具'},
  {n:'DNS 查询',         u:'https://tool.lu/dns/',                      d:'域名 DNS 解析查询',    c:'tool', g:'实用工具'},
  {n:'密码生成器',       u:'https://tool.lu/password/',                 d:'随机强密码生成',       c:'tool', g:'实用工具'},
  {n:'北京时间',         u:'https://www.beijing-time.org/',             d:'标准北京时间',         c:'tool', g:'实用工具'},
  {n:'世界时间',         u:'https://www.timeanddate.com/worldclock/',   d:'全球时区查询',         c:'tool', g:'实用工具'},

  // 学习工具
  {n:'TypingClub',      u:'https://www.typingclub.com/',               d:'在线打字练习',         c:'tool', g:'学习工具'},
  {n:'Keybr',           u:'https://www.keybr.com/',                    d:'打字速度训练',         c:'tool', g:'学习工具'},
  {n:'VisuAlgo',        u:'https://visualgo.net/zh',                   d:'算法可视化学习',       c:'tool', g:'学习工具'},
  {n:'WikiHow',         u:'https://zh.wikihow.com/',                   d:'生活指南百科',         c:'tool', g:'学习工具'},
  {n:'学堂在线',         u:'https://www.xuetangx.com/',                 d:'清华慕课平台',         c:'tool', g:'学习工具'},
  {n:'数学计算',         u:'https://www.wolframalpha.com/',             d:'Wolfram 数学引擎',     c:'tool', g:'学习工具'},

  /* ================= 系统软件 ================= */
  // 压缩解压
  {n:'7-Zip',           u:'https://www.7-zip.org/',                    d:'免费开源压缩软件',     c:'sys', g:'压缩解压'},
  {n:'Bandizip',        u:'https://www.bandisoft.com/bandizip/',       d:'轻量压缩解压工具',     c:'sys', g:'压缩解压'},
  {n:'WinRAR',          u:'https://www.win-rar.com/',                  d:'经典压缩软件',         c:'sys', g:'压缩解压'},
  {n:'NanaZip',         u:'https://github.com/M2Team/NanaZip',         d:'Win11 现代压缩工具',   c:'sys', g:'压缩解压'},
  {n:'PeaZip',          u:'https://peazip.github.io/',                 d:'开源跨平台压缩工具',   c:'sys', g:'压缩解压'},

  // 文件搜索
  {n:'Everything',      u:'https://www.voidtools.com/zh-cn/',          d:'秒搜全盘文件',         c:'sys', g:'文件搜索'},
  {n:'Listary',         u:'https://www.listary.com/',                  d:'资源管理器搜索增强',   c:'sys', g:'文件搜索'},
  {n:'AnyTXT',          u:'https://anytxt.net/',                       d:'全文内容搜索',         c:'sys', g:'文件搜索'},
  {n:'uTools',          u:'https://u.tools/',                          d:'效率启动器',           c:'sys', g:'文件搜索'},
  {n:'Wox',             u:'https://github.com/Wox-launcher/Wox',       d:'开源快速启动器',       c:'sys', g:'文件搜索'},

  // 卸载清理
  {n:'Geek Uninstaller',u:'https://geekuninstaller.com/',              d:'彻底卸载清理残留',     c:'sys', g:'卸载清理'},
  {n:'Revo Uninstaller',u:'https://www.revouninstaller.com/',          d:'专业软件卸载',         c:'sys', g:'卸载清理'},
  {n:'HiBit Uninstaller',u:'https://www.hibitsoft.ir/Uninstaller.html',d:'强力卸载工具',         c:'sys', g:'卸载清理'},
  {n:'IObit Uninstaller',u:'https://www.iobit.com/en/advanceduninstaller.php',d:'IObit 卸载工具',c:'sys', g:'卸载清理'},

  // 截图录屏
  {n:'Snipaste',        u:'https://www.snipaste.com/',                 d:'截图贴图工具',         c:'sys', g:'截图录屏'},
  {n:'ShareX',          u:'https://getsharex.com/',                    d:'开源截图录屏工具',     c:'sys', g:'截图录屏'},
  {n:'PixPin',          u:'https://pixpinapp.com/',                    d:'国产截图贴图',         c:'sys', g:'截图录屏'},
  {n:'FastStone',       u:'https://www.faststone.org/',                d:'截图与图片管理',       c:'sys', g:'截图录屏'},
  {n:'OBS Studio',      u:'https://obsproject.com/zh-cn',              d:'专业录屏直播工具',     c:'sys', g:'截图录屏'},
  {n:'ScreenToGif',     u:'https://www.screentogif.com/',              d:'屏幕录制为 GIF',       c:'sys', g:'截图录屏'},
  {n:'Bandicam',        u:'https://www.bandicam.cn/',                  d:'高清录屏工具',         c:'sys', g:'截图录屏'},
  {n:'Captura',         u:'https://github.com/MathewSachin/Captura',   d:'开源录屏工具',         c:'sys', g:'截图录屏'},

  // 播放器
  {n:'PotPlayer',       u:'https://potplayer.daum.net/',               d:'全能视频播放器',       c:'sys', g:'播放器'},
  {n:'VLC',             u:'https://www.videolan.org/vlc/',             d:'开源跨平台播放器',     c:'sys', g:'播放器'},
  {n:'MPV',             u:'https://mpv.io/',                           d:'轻量极简播放器',       c:'sys', g:'播放器'},
  {n:'Foobar2000',      u:'https://www.foobar2000.org/',               d:'专业音频播放器',       c:'sys', g:'播放器'},
  {n:'SumatraPDF',      u:'https://www.sumatrapdfreader.org/',         d:'轻量 PDF 阅读器',      c:'sys', g:'播放器'},
  {n:'KMPlayer',        u:'https://www.kmplayer.com/',                 d:'全能多媒体播放器',     c:'sys', g:'播放器'},
  {n:'MPC-HC',          u:'https://github.com/clsid2/mpc-hc',          d:'经典媒体播放器',       c:'sys', g:'播放器'},
  {n:'AIMP',            u:'https://www.aimp.ru/',                      d:'俄罗斯音频播放器',     c:'sys', g:'播放器'},

  // 剪贴板
  {n:'Ditto',           u:'https://ditto-cp.sourceforge.io/',          d:'剪贴板历史管理',       c:'sys', g:'剪贴板'},
  {n:'ClipDiary',       u:'https://clipdiary.com/',                    d:'剪贴板记录工具',       c:'sys', g:'剪贴板'},
  {n:'EcoPaste',        u:'https://ecopaste.cn/',                      d:'开源剪贴板管理',       c:'sys', g:'剪贴板'},
  {n:'CopyQ',           u:'https://hluk.github.io/CopyQ/',             d:'跨平台剪贴板管理',     c:'sys', g:'剪贴板'},

  // 效率工具
  {n:'PowerToys',       u:'https://github.com/microsoft/PowerToys',    d:'微软官方效率工具集',   c:'sys', g:'效率工具'},
  {n:'QuickLook',       u:'https://github.com/QL-Win/QuickLook',       d:'空格键快速预览',       c:'sys', g:'效率工具'},
  {n:'TrafficMonitor',  u:'https://github.com/zhongyang219/TrafficMonitor', d:'网速与硬件监控', c:'sys', g:'效率工具'},
  {n:'Twinkle Tray',    u:'https://twinkletray.com/',                  d:'多显示器亮度调节',     c:'sys', g:'效率工具'},
  {n:'FadeTop',         u:'https://www.fadetop.com/',                  d:'定时休息提醒',         c:'sys', g:'效率工具'},
  {n:'EarTrumpet',      u:'https://eartrumpet.app/',                   d:'音量精细控制',         c:'sys', g:'效率工具'},
  {n:'Textify',         u:'https://rammichael.com/textify',            d:'复制窗口任意文字',     c:'sys', g:'效率工具'},
  {n:'Windows Terminal',u:'https://github.com/microsoft/terminal',     d:'微软新一代终端',       c:'sys', g:'效率工具'},

  // 密码管理
  {n:'Bitwarden',       u:'https://bitwarden.com/',                    d:'开源密码管理器',       c:'sys', g:'密码管理'},
  {n:'KeePass',         u:'https://keepass.info/',                     d:'离线密码管理',         c:'sys', g:'密码管理'},
  {n:'1Password',       u:'https://1password.com/',                    d:'知名密码管理服务',     c:'sys', g:'密码管理'},

  /* ================= AI 助手 ================= */
  // 通用对话
  {n:'DeepSeek',        u:'https://chat.deepseek.com/',                d:'代码与数学强，完全免费', c:'ai', g:'通用对话'},
  {n:'豆包',            u:'https://www.doubao.com/chat/',              d:'字节出品，图片文档全能', c:'ai', g:'通用对话'},
  {n:'Kimi',            u:'https://kimi.moonshot.cn/',                 d:'超长文本阅读整理',     c:'ai', g:'通用对话'},
  {n:'通义千问',         u:'https://www.tongyi.com/',                   d:'阿里出品，支持文档解析', c:'ai', g:'通用对话'},
  {n:'腾讯元宝',         u:'https://yuanbao.tencent.com/',              d:'微信生态，接入 DeepSeek', c:'ai', g:'通用对话'},
  {n:'文心一言',         u:'https://yiyan.baidu.com/',                  d:'百度出品，中文理解好', c:'ai', g:'通用对话'},
  {n:'智谱清言',         u:'https://chatglm.cn/',                       d:'清华系，代码学术强',   c:'ai', g:'通用对话'},
  {n:'讯飞星火',         u:'https://xinghuo.xfyun.cn/',                 d:'语音识别强，可做笔记', c:'ai', g:'通用对话'},
  {n:'海螺 AI',          u:'https://hailuoai.com/',                     d:'MiniMax 对话与视频',   c:'ai', g:'通用对话'},
  {n:'天工 AI',          u:'https://www.tiangong.cn/',                  d:'搜索 + 创作一体',      c:'ai', g:'通用对话'},
 {n:'扣子 Coze',          u:'https://www.coze.cn/',                  d:'零代码搭自己的 AI 机器人',      c:'ai', g:'智能体创作'},


  // 编程专用
  {n:'通义灵码',         u:'https://lingma.aliyun.com/',                d:'免费 AI 编程助手',     c:'ai', g:'编程专用'},
  {n:'Cursor',          u:'https://cursor.sh/',                        d:'AI 编辑器',            c:'ai', g:'编程专用'},
  {n:'GitHub Copilot',  u:'https://github.com/features/copilot',       d:'GitHub 官方 AI 编程',  c:'ai', g:'编程专用'},
  {n:'Codeium',         u:'https://codeium.com/',                      d:'免费 AI 代码补全',     c:'ai', g:'编程专用'},
  {n:'Tabnine',         u:'https://www.tabnine.com/',                  d:'AI 代码补全',          c:'ai', g:'编程专用'},
  {n:'CodeGeeX',        u:'https://codegeex.cn/',                      d:'国产 AI 编程助手',     c:'ai', g:'编程专用'},
  {n:'百度 Comate',      u:'https://comate.baidu.com/',                 d:'百度 AI 编程助手',     c:'ai', g:'编程专用'},

  // 图像生成
  {n:'即梦 AI',          u:'https://jimeng.jianying.com/',              d:'字节 AI 绘画与视频',   c:'ai', g:'图像生成'},
  {n:'可灵 AI',          u:'https://klingai.kuaishou.com/',             d:'快手视频生成大模型',   c:'ai', g:'图像生成'},
  {n:'Midjourney',      u:'https://www.midjourney.com/',               d:'顶级 AI 绘画',         c:'ai', g:'图像生成'},
  {n:'Stable Diffusion',u:'https://stability.ai/',                     d:'开源 AI 绘画模型',     c:'ai', g:'图像生成'},
  {n:'DALL·E',          u:'https://openai.com/dall-e-3',               d:'OpenAI 图像生成',      c:'ai', g:'图像生成'},
  {n:'通义万相',         u:'https://tongyi.aliyun.com/wanxiang/',       d:'阿里 AI 绘画',         c:'ai', g:'图像生成'},
  {n:'文心一格',         u:'https://yige.baidu.com/',                   d:'百度 AI 绘画',         c:'ai', g:'图像生成'},

  // 视频生成
  {n:'Runway',          u:'https://runwayml.com/',                     d:'AI 视频生成平台',      c:'ai', g:'视频生成'},
  {n:'Pika',            u:'https://pika.art/',                         d:'AI 视频生成',          c:'ai', g:'视频生成'},
  {n:'HeyGen',          u:'https://www.heygen.com/',                   d:'AI 数字人视频',        c:'ai', g:'视频生成'},
  {n:'Luma AI',         u:'https://lumalabs.ai/',                      d:'AI 视频与 3D 生成',    c:'ai', g:'视频生成'},

  // 文档翻译
  {n:'ChatPDF',         u:'https://www.chatpdf.com/',                  d:'与 PDF 对话',          c:'ai', g:'文档翻译'},
  {n:'DeepL',           u:'https://www.deepl.com/translator',          d:'最准的 AI 翻译',       c:'ai', g:'文档翻译'},
  {n:'彩云小译',         u:'https://fanyi.caiyunapp.com/',              d:'中英对照翻译',         c:'ai', g:'文档翻译'},
  {n:'沉浸式翻译',       u:'https://immersivetranslate.com/',           d:'浏览器双语对照',       c:'ai', g:'文档翻译'},
  {n:'秘塔 AI 搜索',     u:'https://metaso.cn/',                        d:'无广告学术搜索',       c:'ai', g:'文档翻译'},
  {n:'有道翻译',         u:'https://fanyi.youdao.com/',                 d:'网易翻译工具',         c:'ai', g:'文档翻译'},

  /* ================= 编程开发 ================= */
  // 代码托管
  {n:'GitHub',          u:'https://github.com/',                       d:'全球最大代码托管',     c:'dev', g:'代码托管'},
  {n:'Gitee 码云',       u:'https://gitee.com/',                        d:'国内代码托管',         c:'dev', g:'代码托管'},
  {n:'GitLab',          u:'https://gitlab.com/',                       d:'开源 DevOps 平台',     c:'dev', g:'代码托管'},
  {n:'Coding',          u:'https://coding.net/',                       d:'腾讯云代码托管',       c:'dev', g:'代码托管'},
  {n:'Bitbucket',       u:'https://bitbucket.org/',                    d:'Atlassian 代码托管',   c:'dev', g:'代码托管'},

  // 在线 IDE
  {n:'CodePen',         u:'https://codepen.io/',                       d:'前端在线编辑器',       c:'dev', g:'在线 IDE'},
  {n:'JSFiddle',        u:'https://jsfiddle.net/',                     d:'在线 JS 测试',         c:'dev', g:'在线 IDE'},
  {n:'StackBlitz',      u:'https://stackblitz.com/',                   d:'浏览器里的 IDE',       c:'dev', g:'在线 IDE'},
  {n:'Replit',          u:'https://replit.com/',                       d:'在线多语言编程',       c:'dev', g:'在线 IDE'},
  {n:'CodeSandbox',     u:'https://codesandbox.io/',                   d:'在线前端沙箱',         c:'dev', g:'在线 IDE'},
  {n:'GitHub Codespaces',u:'https://github.com/features/codespaces',  d:'GitHub 云端 IDE',      c:'dev', g:'在线 IDE'},

  // 学习教程
  {n:'菜鸟教程',         u:'https://www.runoob.com/',                   d:'入门必看，边学边练',   c:'dev', g:'学习教程'},
  {n:'MDN 文档',         u:'https://developer.mozilla.org/zh-CN/',       d:'前端权威参考文档',     c:'dev', g:'学习教程'},
  {n:'W3School',        u:'https://www.w3school.com.cn/',              d:'Web 技术基础教程',     c:'dev', g:'学习教程'},
  {n:'掘金',             u:'https://juejin.cn/',                        d:'国内技术社区',         c:'dev', g:'学习教程'},
  {n:'CSDN',            u:'https://www.csdn.net/',                     d:'中文技术资料最多',     c:'dev', g:'学习教程'},
  {n:'Stack Overflow',  u:'https://stackoverflow.com/',                d:'英文报错搜索神器',     c:'dev', g:'学习教程'},
  {n:'Hello 算法',       u:'https://www.hello-algo.com/',               d:'数据结构与算法教程',   c:'dev', g:'学习教程'},
  {n:'慕课网',           u:'https://www.imooc.com/',                    d:'IT 技能在线学习',      c:'dev', g:'学习教程'},
  {n:'极客时间',         u:'https://time.geekbang.org/',                d:'技术付费专栏',         c:'dev', g:'学习教程'},

  // 刷题竞赛
  {n:'力扣 LeetCode',    u:'https://leetcode.cn/',                      d:'刷算法题，面试必备',   c:'dev', g:'刷题竞赛'},
  {n:'牛客网',           u:'https://www.nowcoder.com/',                 d:'刷题 + 校招题库',      c:'dev', g:'刷题竞赛'},
  {n:'Codeforces',      u:'https://codeforces.com/',                   d:'国际算法竞赛',         c:'dev', g:'刷题竞赛'},
  {n:'AtCoder',         u:'https://atcoder.jp/',                       d:'日本算法竞赛',         c:'dev', g:'刷题竞赛'},
  {n:'蓝桥云课',         u:'https://www.lanqiao.cn/',                   d:'蓝桥杯真题与实验',     c:'dev', g:'刷题竞赛'},
  {n:'洛谷',             u:'https://www.luogu.com.cn/',                 d:'国内算法练习平台',     c:'dev', g:'刷题竞赛'},
  {n:'Codewars',        u:'https://www.codewars.com/',                 d:'编程挑战平台',         c:'dev', g:'刷题竞赛'},

  // 前端文档
  {n:'Vue',             u:'https://cn.vuejs.org/',                     d:'渐进式 JS 框架',       c:'dev', g:'前端文档'},
  {n:'React',           u:'https://zh-hans.react.dev/',                d:'主流前端框架',         c:'dev', g:'前端文档'},
  {n:'Tailwind CSS',    u:'https://tailwindcss.com/',                  d:'原子化 CSS 框架',      c:'dev', g:'前端文档'},
  {n:'Vite',            u:'https://cn.vitejs.dev/',                    d:'前端构建工具',         c:'dev', g:'前端文档'},
  {n:'Next.js',         u:'https://nextjs.org/',                       d:'React 全栈框架',       c:'dev', g:'前端文档'},
  {n:'TypeScript',      u:'https://www.typescriptlang.org/zh/',        d:'JS 类型超集',          c:'dev', g:'前端文档'},
  {n:'Nuxt',            u:'https://nuxt.com/',                         d:'Vue 全栈框架',         c:'dev', g:'前端文档'},

  // API 数据库
  {n:'Hoppscotch',      u:'https://hoppscotch.io/',                    d:'开源 API 测试工具',    c:'dev', g:'API 数据库'},
  {n:'Postman Web',     u:'https://web.postman.co/',                   d:'API 测试平台',         c:'dev', g:'API 数据库'},
  {n:'DB Fiddle',       u:'https://www.db-fiddle.com/',                d:'在线 SQL 测试',        c:'dev', g:'API 数据库'},
  {n:'Swagger',         u:'https://swagger.io/',                       d:'API 文档工具',         c:'dev', g:'API 数据库'},
  {n:'JSONPlaceholder', u:'https://jsonplaceholder.typicode.com/',     d:'测试用假数据 API',     c:'dev', g:'API 数据库'},
  {n:'Apifox',          u:'https://apifox.com/',                       d:'国产 API 协作工具',    c:'dev', g:'API 数据库'},

  /* ================= 设计与建模 ================= */
  // 平面设计
  {n:'Figma',           u:'https://www.figma.com/',                    d:'在线协作 UI 设计',     c:'design', g:'平面设计'},
  {n:'Canva 可画',       u:'https://www.canva.cn/',                     d:'模板设计海报 PPT',     c:'design', g:'平面设计'},
  {n:'稿定设计',         u:'https://www.gaoding.com/',                  d:'国内在线设计平台',     c:'design', g:'平面设计'},
  {n:'即时设计',         u:'https://js.design/',                        d:'国产在线 UI 设计',     c:'design', g:'平面设计'},
  {n:'Iconfont',        u:'https://www.iconfont.cn/',                  d:'阿里图标库',           c:'design', g:'平面设计'},
  {n:'花瓣网',           u:'https://huaban.com/',                       d:'设计灵感与素材',       c:'design', g:'平面设计'},
  {n:'站酷',             u:'https://www.zcool.com.cn/',                 d:'设计师作品社区',       c:'design', g:'平面设计'},

  // 3D 建模
  {n:'Blender',         u:'https://www.blender.org/',                  d:'开源免费 3D 套件',     c:'design', g:'3D 建模'},
  {n:'SketchUp',        u:'https://www.sketchup.com/',                 d:'建筑室内 3D 建模',     c:'design', g:'3D 建模'},
  {n:'Tinkercad',       u:'https://www.tinkercad.com/',                d:'浏览器 3D 建模入门',   c:'design', g:'3D 建模'},
  {n:'Spline',          u:'https://spline.design/',                    d:'网页 3D 设计工具',     c:'design', g:'3D 建模'},
  {n:'Three.js',        u:'https://threejs.org/',                      d:'Web 3D 图形库',        c:'design', g:'3D 建模'},
  {n:'Thingiverse',     u:'https://www.thingiverse.com/',              d:'3D 打印模型分享',      c:'design', g:'3D 建模'},

  /* ================= 效率办公 ================= */
  {n:'WPS',             u:'https://www.wps.cn/',                       d:'办公三件套，模板丰富', c:'office', g:'办公套件'},
  {n:'Office 网页版',    u:'https://www.office.com/',                   d:'微软 Office 在线版',   c:'office', g:'办公套件'},
  {n:'Google Docs',     u:'https://docs.google.com/',                  d:'谷歌在线文档',         c:'office', g:'办公套件'},
  {n:'腾讯文档',         u:'https://docs.qq.com/',                      d:'在线协作文档表格',     c:'office', g:'办公套件'},
  {n:'XMind',           u:'https://xmind.cn/',                         d:'专业思维导图工具',     c:'office', g:'思维导图'},
  {n:'iLovePDF',        u:'https://www.ilovepdf.com/zh-cn',            d:'PDF 合并/转换/压缩',   c:'office', g:'PDF 工具'}
];

/* =========================================================
   快捷键数据
   ========================================================= */
const KEYBOARD_DATA = {

  win7: {
    label:'Win 7',
    groups:[
      {name:'通用基础', items:[
        ['Ctrl','C','复制','复制选中的内容或文件'],
        ['Ctrl','V','粘贴','粘贴已复制的内容'],
        ['Ctrl','X','剪切','剪切后原内容消失'],
        ['Ctrl','Z','撤销','可连续按回退多步'],
        ['Ctrl','Y','重做','和 Ctrl+Z 相反'],
        ['Ctrl','A','全选','全选当前窗口内容'],
        ['Ctrl','S','保存','写文档时勤按'],
        ['Ctrl','P','打印','弹出打印对话框'],
        ['Ctrl','F','查找','在网页或文档中找关键词'],
        ['Ctrl','H','替换','文本编辑器使用'],
        ['Ctrl','N','新建','新窗口或新文档'],
        ['Ctrl','O','打开','打开文件对话框'],
        ['Ctrl','W','关闭标签','关闭当前标签页或窗口'],
        ['Ctrl','R','刷新','刷新当前页面'],
        ['Alt','Tab','切换程序','按住 Alt 连按 Tab 循环'],
        ['Alt','Esc','循环窗口','直接切换，无预览'],
        ['Alt','F4','关闭程序','关闭当前窗口或程序'],
        ['Shift','Delete','永久删除','不进回收站，慎用'],
        ['Ctrl','Alt','Del','安全选项','任务管理器/锁定/注销'],
        ['Ctrl','Shift','Esc','任务管理器','比 Ctrl+Alt+Del 更快'],
        ['F2','','重命名','选中文件后直接按'],
        ['F5','','刷新','浏览器/资源管理器通用'],
        ['F11','','全屏','浏览器全屏浏览'],
        ['Esc','','取消','弹窗/输入框/全屏均可']
      ]},
      {name:'Win 徽标键', items:[
        ['Win','','开始菜单','打开或关闭开始菜单'],
        ['Win','D','显示桌面','再按一次恢复窗口'],
        ['Win','E','资源管理器','快速打开计算机'],
        ['Win','R','运行','输入 cmd / regedit 等'],
        ['Win','L','锁屏','离开电脑时按一下'],
        ['Win','M','最小化全部','再按 Win+Shift+M 还原'],
        ['Win','F','搜索文件','Win7 搜索功能'],
        ['Win','Pause','系统属性','查看内存版本'],
        ['Win','Tab','3D 切换','Flip 3D 立体切换'],
        ['Win','T','任务栏预览','连按循环切换'],
        ['Win','P','演示模式','切换投影/外接屏'],
        ['Win','↑','最大化','窗口贴靠顶部'],
        ['Win','↓','最小化','还原当前窗口'],
        ['Win','←','贴靠左侧','占据左半屏'],
        ['Win','→','贴靠右侧','占据右半屏'],
        ['Win','Home','仅留当前','最小化其他窗口'],
        ['Win','Space','Aero Peek','透明预览桌面'],
        ['Win','数字','启动对应程序','Win+1 打开任务栏第一个']
      ]},
      {name:'资源管理器', items:[
        ['Alt','←','后退','回上一级目录'],
        ['Alt','→','前进','进下一级'],
        ['Alt','↑','返回上级','回上一级文件夹'],
        ['Alt','Enter','属性','查看文件/文件夹属性'],
        ['Alt','D','地址栏','地址栏获得焦点'],
        ['Ctrl','Shift','N','新建文件夹','在资源管理器内'],
        ['Ctrl','E','搜索框','焦点跳到搜索框'],
        ['F3','','搜索文件','资源管理器搜索'],
        ['F4','','地址栏下拉','显示地址历史'],
        ['F6','','切换焦点','地址栏和文件区循环'],
        ['Shift','F10','右键菜单','等同鼠标右键'],
        ['Ctrl','鼠标滚轮','切换视图','列表/图标切换']
      ]},
      {name:'截图与显示', items:[
        ['PrtScn','','全屏截图','截到剪贴板'],
        ['Alt','PrtScn','窗口截图','只截活动窗口'],
        ['Win','+','启动放大镜','连按放大'],
        ['Win','-','缩小放大镜','缩小显示'],
        ['Win','Esc','关闭放大镜','关闭辅助工具']
      ]}
    ]
  },

  win10: {
    label:'Win 10',
    groups:[
      {name:'Win10 新增', items:[
        ['Win','Tab','任务视图','窗口和虚拟桌面'],
        ['Win','Ctrl','D','新建虚拟桌面','工作娱乐分开'],
        ['Win','Ctrl','F4','关闭虚拟桌面','关闭当前桌面'],
        ['Win','Ctrl','←','左虚拟桌面','切换到左侧'],
        ['Win','Ctrl','→','右虚拟桌面','切换到右侧'],
        ['Win','A','操作中心','通知和快捷开关'],
        ['Win','I','设置','打开 Windows 设置'],
        ['Win','S','搜索','快速搜索'],
        ['Win','V','剪贴板历史','1809 以后可用'],
        ['Win','.','','表情符号面板','半角句号键'],
        ['Win',';','','表情符号面板','分号键'],
        ['Win','H','听写','语音转文字'],
        ['Win','K','连接设备','蓝牙/投屏'],
        ['Win','Shift','S','截图与草图','框选截图'],
        ['Win','PrtScn','','全屏截图保存','自动存到图片文件夹'],
        ['Win','G','游戏栏','录屏/截图/帧数'],
        ['Win','Alt','R','开始/停止录制','游戏栏录制']
      ]},
      {name:'窗口与桌面', items:[
        ['Win','←','贴靠左半屏','占据左半屏'],
        ['Win','→','贴靠右半屏','占据右半屏'],
        ['Win','↑','最大化','窗口最大化'],
        ['Win','↓','最小化','窗口最小化'],
        ['Win','Shift','↑','垂直拉伸','拉伸到屏幕高度'],
        ['Win','Shift','↓','垂直缩小','缩小窗口高度'],
        ['Win','Shift','←','移到左显示器','多屏时使用'],
        ['Win','Shift','→','移到右显示器','多屏时使用'],
        ['Win','D','显示桌面','再按恢复'],
        ['Win','M','最小化全部','最小化所有窗口'],
        ['Win','Home','仅留当前','最小化其他窗口'],
        ['Win','L','锁屏','锁定计算机'],
        ['Win','E','文件管理器','打开资源管理器'],
        ['Win','R','运行','打开运行对话框'],
        ['Win','P','投影设置','切换投影模式'],
        ['Win','X','快速链接','右键开始按钮同效'],
        ['Win','Pause','系统信息','查看系统配置'],
        ['Alt','Tab','切换程序','窗口间切换'],
        ['Alt','F4','关闭程序','关闭当前程序'],
        ['Alt','Esc','循环窗口','循环切换窗口']
      ]},
      {name:'文件与资源管理器', items:[
        ['Ctrl','Shift','N','新建文件夹',''],
        ['Ctrl','Shift','Esc','任务管理器','打开任务管理器'],
        ['Alt','Enter','文件属性',''],
        ['Alt','←','后退',''],
        ['Alt','→','前进',''],
        ['Alt','↑','返回上级',''],
        ['Alt','D','地址栏','焦点到地址栏'],
        ['Ctrl','E','搜索框','焦点到搜索框'],
        ['F2','','重命名',''],
        ['F3','','搜索',''],
        ['F5','','刷新',''],
        ['F6','','切换焦点',''],
        ['Shift','Delete','永久删除',''],
        ['Shift','F10','右键菜单',''],
        ['Ctrl','鼠标滚轮','切换视图','']
      ]},
      {name:'通用基础', items:[
        ['Ctrl','C','复制',''],
        ['Ctrl','V','粘贴',''],
        ['Ctrl','X','剪切',''],
        ['Ctrl','Z','撤销',''],
        ['Ctrl','Y','重做',''],
        ['Ctrl','A','全选',''],
        ['Ctrl','S','保存',''],
        ['Ctrl','P','打印',''],
        ['Ctrl','F','查找',''],
        ['Ctrl','N','新建',''],
        ['Ctrl','W','关闭标签',''],
        ['Ctrl','R','刷新',''],
        ['Ctrl','Shift','T','恢复关闭的标签','浏览器误关页面靠它'],
        ['F11','','全屏',''],
        ['F12','','开发者工具','浏览器调试'],
        ['Esc','','取消','']
      ]}
    ]
  },

  win11: {
    label:'Win 11',
    groups:[
      {name:'Win11 新增', items:[
        ['Win','W','小组件面板','Win11 左侧小组件'],
        ['Win','A','快速设置','音量亮度 WiFi 等'],
        ['Win','N','通知中心','日历和通知'],
        ['Win','Z','贴靠布局','窗口布局菜单'],
        ['Win','Shift','S','截图工具','框选截图'],
        ['Win','Tab','任务视图','窗口和虚拟桌面'],
        ['Win','Ctrl','D','新建虚拟桌面',''],
        ['Win','Ctrl','←','左虚拟桌面',''],
        ['Win','Ctrl','→','右虚拟桌面',''],
        ['Win','Alt','K','麦克风静音','会议时使用'],
        ['Win','Ctrl','Enter','讲述人','辅助功能'],
        ['Win','P','投影','投屏模式'],
        ['Win','Space','切换输入法',''],
        ['Win','.','','表情符号','半角句号'],
        ['Win','V','剪贴板历史',''],
        ['Win','H','语音输入','听写功能'],
        ['Win','I','设置',''],
        ['Win','L','锁屏',''],
        ['Win','D','显示桌面',''],
        ['Win','E','资源管理器','']
      ]},
      {name:'窗口贴靠', items:[
        ['Win','←','贴靠左半屏',''],
        ['Win','→','贴靠右半屏',''],
        ['Win','↑','最大化',''],
        ['Win','↓','最小化',''],
        ['Win','Z','贴靠布局','选 2/3/4 分屏'],
        ['Win','Shift','↑','垂直拉伸',''],
        ['Win','Shift','↓','垂直缩小',''],
        ['Win','Shift','←','移到左显示器',''],
        ['Win','Shift','→','移到右显示器',''],
        ['Win','Home','仅留当前',''],
        ['Alt','Tab','切换程序',''],
        ['Alt','F4','关闭程序',''],
        ['Alt','Esc','循环窗口','']
      ]},
      {name:'任务栏与开始', items:[
        ['Win','T','任务栏循环',''],
        ['Win','B','聚焦通知区',''],
        ['Win','数字','启动对应程序',''],
        ['Win','X','快速链接',''],
        ['Win','Ctrl','Shift','B','重置显卡驱动','黑屏时尝试'],
        ['Win','Pause','系统信息',''],
        ['Win','R','运行',''],
        ['Win','S','搜索',''],
        ['Win','Q','搜索',''],
        ['Ctrl','Shift','Esc','任务管理器','']
      ]}
    ]
  },

  chrome: {
    label:'浏览器',
    groups:[
      {name:'标签页', items:[
        ['Ctrl','T','新建标签页','打开新标签'],
        ['Ctrl','W','关闭标签页','关闭当前标签'],
        ['Ctrl','Shift','T','恢复关闭的标签','误关页面救星'],
        ['Ctrl','Tab','下一个标签','切换到右侧标签'],
        ['Ctrl','Shift','Tab','上一个标签','切换到左侧标签'],
        ['Ctrl','1','到','Ctrl+数字跳转标签','Ctrl+1 到 Ctrl+8'],
        ['Ctrl','9','','最后一个标签','跳到最后一个'],
        ['Ctrl','N','新窗口','打开新窗口'],
        ['Ctrl','Shift','N','无痕模式','不记录历史'],
        ['Ctrl','Shift','W','关闭窗口','关闭整个窗口']
      ]},
      {name:'导航与刷新', items:[
        ['Alt','←','后退','回上一页'],
        ['Alt','→','前进','进下一页'],
        ['F5','','刷新','刷新页面'],
        ['Ctrl','F5','','强制刷新','清缓存刷新'],
        ['Esc','','停止加载','停止页面加载'],
        ['Alt','Home','','打开主页','回主页'],
        ['Ctrl','L','','地址栏','焦点到地址栏'],
        ['Ctrl','K','','搜索栏','焦点到搜索栏'],
        ['F6','','切换焦点','地址栏/页面循环']
      ]},
      {name:'书签与功能', items:[
        ['Ctrl','D','添加书签','收藏当前页'],
        ['Ctrl','Shift','D','书签所有标签','全部标签收藏'],
        ['Ctrl','Shift','B','显示书签栏','显示/隐藏书签栏'],
        ['Ctrl','H','历史记录','打开历史'],
        ['Ctrl','J','下载内容','打开下载页'],
        ['Ctrl','P','打印','打印当前页'],
        ['Ctrl','S','保存页面','保存当前页'],
        ['Ctrl','F','页内查找','查找页面内容'],
        ['Ctrl','+','放大','放大页面'],
        ['Ctrl','-','缩小','缩小页面'],
        ['Ctrl','0','','恢复 100%','恢复默认大小'],
        ['F11','','全屏','全屏浏览'],
        ['F12','','开发者工具','调试用'],
        ['Ctrl','U','查看源代码','查看网页源码']
      ]}
    ]
  },

  office: {
    label:'Office',
    groups:[
      {name:'通用', items:[
        ['Ctrl','N','新建文档',''],
        ['Ctrl','O','打开',''],
        ['Ctrl','S','保存',''],
        ['Ctrl','Shift','S','另存为',''],
        ['Ctrl','P','打印',''],
        ['Ctrl','W','关闭文档',''],
        ['Ctrl','Z','撤销',''],
        ['Ctrl','Y','重做',''],
        ['Ctrl','F','查找',''],
        ['Ctrl','H','替换',''],
        ['Ctrl','A','全选',''],
        ['Ctrl','B','加粗',''],
        ['Ctrl','I','斜体',''],
        ['Ctrl','U','下划线',''],
        ['F12','','另存为','']
      ]},
      {name:'Word 常用', items:[
        ['Ctrl','E','居中',''],
        ['Ctrl','L','左对齐',''],
        ['Ctrl','R','右对齐',''],
        ['Ctrl','J','两端对齐',''],
        ['Ctrl','Enter','分页符','插入分页'],
        ['Ctrl','Shift','Enter','换行符','不分段换行'],
        ['Alt','Shift','D','插入日期',''],
        ['Shift','F3','切换大小写',''],
        ['Ctrl','Shift','C','复制格式',''],
        ['Ctrl','Shift','V','粘贴格式',''],
        ['Ctrl','D','字体对话框',''],
        ['Ctrl','K','超链接','']
      ]},
      {name:'Excel 常用', items:[
        ['Ctrl','方向键','跳转边缘','跳到数据边缘'],
        ['Ctrl','Home','回到 A1',''],
        ['Ctrl','End','到最后单元格',''],
        ['Shift','方向键','选中区域',''],
        ['Ctrl','Shift','方向键','选中到边缘',''],
        ['F2','','编辑单元格',''],
        ['F4','','绝对引用','$A$1'],
        ['Ctrl',';','','输入当前日期',''],
        ['Ctrl','Shift',';','输入当前时间',''],
        ['Ctrl','1','','单元格格式',''],
        ['Alt','=','','自动求和',''],
        ['Ctrl','Shift','L','筛选','切换筛选器']
      ]},
      {name:'PPT 常用', items:[
        ['F5','','从头放映',''],
        ['Shift','F5','','从当前放映',''],
        ['Esc','','退出放映',''],
        ['B','','黑屏','放映时'],
        ['W','','白屏','放映时'],
        ['Ctrl','M','新建幻灯片',''],
        ['Ctrl','D','复制幻灯片',''],
        ['Ctrl','Shift','G','组合对象',''],
        ['Ctrl','Shift','H','取消组合',''],
        ['Ctrl','G','组合','']
      ]}
    ]
  },

  vscode: {
    label:'VSCode',
    groups:[
      {name:'基础', items:[
        ['Ctrl','Shift','P','命令面板','万能入口'],
        ['Ctrl','P','快速打开','按文件名找'],
        ['Ctrl','Shift','N','新建窗口',''],
        ['Ctrl','W','关闭编辑器',''],
        ['Ctrl','S','保存',''],
        ['Ctrl','K','S','保存全部',''],
        ['Ctrl','B','切换侧边栏',''],
        ['Ctrl','`','','切换终端','反引号键'],
        ['Ctrl','\\','','拆分编辑器','']
      ]},
      {name:'编辑', items:[
        ['Ctrl','/','注释',''],
        ['Alt','↑','移动行上',''],
        ['Alt','↓','移动行下',''],
        ['Shift','Alt','↑','复制行上',''],
        ['Shift','Alt','↓','复制行下',''],
        ['Ctrl','Shift','K','删除行',''],
        ['Ctrl','Enter','下方新行',''],
        ['Ctrl','Shift','Enter','上方新行',''],
        ['Ctrl','D','选择下一个匹配',''],
        ['Ctrl','Shift','L','选择所有匹配',''],
        ['Ctrl','Alt','↑','上方加光标',''],
        ['Ctrl','Alt','↓','下方加光标','']
      ]},
      {name:'导航与查找', items:[
        ['Ctrl','F','查找',''],
        ['Ctrl','H','替换',''],
        ['F3','','下一个',''],
        ['Shift','F3','','上一个',''],
        ['Ctrl','Shift','F','全局查找',''],
        ['Ctrl','Shift','H','全局替换',''],
        ['F12','','跳转定义',''],
        ['Alt','F12','','预览定义',''],
        ['Shift','F12','','查找引用',''],
        ['Ctrl','G','跳转行',''],
        ['Ctrl','Shift','O','跳转符号','']
      ]},
      {name:'调试与格式化', items:[
        ['F5','','启动调试',''],
        ['Shift','F5','','停止调试',''],
        ['F9','','切换断点',''],
        ['F10','','单步跳过',''],
        ['F11','','单步进入',''],
        ['Shift','F11','','单步跳出',''],
        ['Ctrl','Shift','I','格式化文档',''],
        ['Shift','Alt','F','格式化',''],
        ['Ctrl','.','','快速修复','']
      ]}
    ]
  }
};

/* =========================================================
   CMD 字典
   ========================================================= */
const CMD_DATA = {
  intro:'所有指令需以管理员身份运行：Win+R → 在弹出的对话框输入cmd然后回车或者点击确定。点击右侧按钮可复制指令。',
  groups:[
    { name:'系统信息', key:'A', items:[
      {c:'systeminfo', d:'查看完整系统配置信息'},
      {c:'systeminfo | findstr /C:"OS 名称" /C:"OS 版本"', d:'只看系统版本'},
      {c:'dxdiag', d:'打开 DirectX 诊断工具'},
      {c:'msinfo32', d:'系统信息汇总面板'},
      {c:'winver', d:'查看 Windows 版本号'},
      {c:'hostname', d:'查看本机计算机名'},
      {c:'whoami', d:'查看当前登录用户名'},
      {c:'wmic bios get serialnumber', d:'查看主板 BIOS 序列号'},
      {c:'wmic csproduct get name', d:'查看电脑型号'},
      {c:'wmic cpu get name', d:'查看 CPU 型号'},
      {c:'wmic memorychip get capacity', d:'查看内存容量'},
      {c:'wmic diskdrive get model,size', d:'查看硬盘型号和容量'},
      {c:'wmic path win32_videocontroller get name', d:'查看显卡型号'},
      {c:'set', d:'查看所有环境变量'},
      {c:'echo %PATH%', d:'查看 PATH 环境变量'}
    ]},
    { name:'文件与目录', key:'B', items:[
      {c:'dir', d:'列出当前目录文件'},
      {c:'dir /a', d:'列出所有文件（含隐藏）'},
      {c:'dir /s', d:'递归列出子目录'},
      {c:'cd 路径', d:'切换目录'},
      {c:'cd ..', d:'返回上一级'},
      {c:'cd /d D:\\文件夹', d:'跨盘切换目录'},
      {c:'md 文件夹名', d:'新建文件夹'},
      {c:'rd 文件夹名', d:'删除空文件夹'},
      {c:'rd /s /q 文件夹名', d:'强制删除文件夹'},
      {c:'del 文件名', d:'删除文件'},
      {c:'del /f /q 文件名', d:'强制删除只读文件'},
      {c:'copy 源 目标', d:'复制文件'},
      {c:'xcopy 源 目标 /E /H', d:'复制文件夹含子目录'},
      {c:'move 源 目标', d:'移动文件'},
      {c:'ren 旧名 新名', d:'重命名文件'},
      {c:'type 文件名', d:'查看文本内容'},
      {c:'tree', d:'树形显示目录'},
      {c:'attrib 文件名', d:'查看文件属性'},
      {c:'attrib +h 文件名', d:'设置隐藏属性'},
      {c:'fc 文件1 文件2', d:'比较两个文件差异'}
    ]},
    { name:'网络命令', key:'C', items:[
      {c:'ipconfig', d:'查看基本网络配置'},
      {c:'ipconfig /all', d:'查看完整网络配置'},
      {c:'ipconfig /flushdns', d:'刷新 DNS 缓存'},
      {c:'ipconfig /release', d:'释放当前 IP'},
      {c:'ipconfig /renew', d:'重新获取 IP'},
      {c:'ping baidu.com', d:'测试网络连通性'},
      {c:'ping -t baidu.com', d:'持续 ping（Ctrl+C 停止）'},
      {c:'ping -n 10 baidu.com', d:'ping 10 次'},
      {c:'tracert baidu.com', d:'追踪路由路径'},
      {c:'pathping baidu.com', d:'路由+丢包统计'},
      {c:'nslookup baidu.com', d:'查询域名 DNS'},
      {c:'netstat -ano', d:'查看所有端口占用'},
      {c:'netstat -ano | findstr :8080', d:'查找占用指定端口的进程'},
      {c:'netsh winsock reset', d:'重置网络协议栈（断网修复）'},
      {c:'netsh int ip reset', d:'重置 TCP/IP 协议'},
      {c:'arp -a', d:'查看 ARP 缓存'},
      {c:'route print', d:'查看路由表'}
    ]},
    { name:'进程与服务', key:'D', items:[
      {c:'tasklist', d:'查看所有运行进程'},
      {c:'tasklist | findstr chrome', d:'查找特定进程'},
      {c:'tasklist /svc', d:'查看进程对应服务'},
      {c:'taskkill /F /IM notepad.exe', d:'按名称结束进程'},
      {c:'taskkill /F /PID 1234', d:'按 PID 结束进程'},
      {c:'taskkill /F /IM explorer.exe', d:'重启资源管理器'},
      {c:'sc query', d:'查看所有服务状态'},
      {c:'sc query wuauserv', d:'查看指定服务'},
      {c:'net start', d:'列出已启动服务'},
      {c:'net start 服务名', d:'启动服务'},
      {c:'net stop wuauserv', d:'停止 Windows 更新服务'},
      {c:'services.msc', d:'图形化服务管理器'}
    ]},
    { name:'用户与权限', key:'E', items:[
      {c:'net user', d:'查看所有用户账户'},
      {c:'net user 用户名 密码 /add', d:'新建用户账户'},
      {c:'net user 用户名 /delete', d:'删除用户账户'},
      {c:'net user 用户名 *', d:'修改用户密码'},
      {c:'net localgroup administrators', d:'查看管理员组成员'},
      {c:'net localgroup administrators 用户名 /add', d:'加入管理员组'},
      {c:'net localgroup administrators 用户名 /delete', d:'移出管理员组'},
      {c:'whoami /priv', d:'查看当前账户权限'},
      {c:'whoami /groups', d:'查看账户所属组'},
      {c:'whoami /user', d:'查看当前用户 SID'},
      {c:'control userpasswords2', d:'用户账户设置面板'},
      {c:'netplwiz', d:'用户账户控制面板'}
    ]},
    { name:'磁盘与分区', key:'F', items:[
      {c:'chkdsk C: /f /r', d:'检查并修复 C 盘'},
      {c:'chkdsk C: /scan', d:'只扫描不修复'},
      {c:'diskpart', d:'进入磁盘分区管理'},
      {c:'cleanmgr', d:'打开磁盘清理'},
      {c:'defrag C: /O', d:'优化 C 盘（SSD Trim）'},
      {c:'fsutil fsinfo drives', d:'列出所有驱动器'},
      {c:'wmic logicaldisk get name,size,freespace', d:'查看磁盘容量'},
      {c:'format D: /FS:NTFS', d:'格式化 D 盘为 NTFS'},
      {c:'label D: 名称', d:'给 D 盘改名'},
      {c:'vssadmin list shadows', d:'列出所有还原点'}
    ]},
    { name:'注册表', key:'G', items:[
      {c:'regedit', d:'打开注册表编辑器'},
      {c:'reg query HKLM\\Software', d:'查询注册表项'},
      {c:'reg add HKLM\\Software\\Test /v Name /d Value', d:'添加注册表项'},
      {c:'reg delete HKLM\\Software\\Test /f', d:'删除注册表项'},
      {c:'reg export HKLM\\Software backup.reg', d:'导出注册表'},
      {c:'reg import backup.reg', d:'导入注册表'},
      {c:'reg save HKLM\\Software backup.hiv', d:'备份注册表'},
      {c:'reg compare key1 key2', d:'比较注册表项'}
    ]},
    { name:'引导与恢复', key:'H', items:[
      {c:'bootrec /fixmbr', d:'修复主引导记录'},
      {c:'bootrec /fixboot', d:'修复引导扇区'},
      {c:'bootrec /rebuildbcd', d:'重建引导配置'},
      {c:'bootrec /scanos', d:'扫描已安装系统'},
      {c:'bcdedit /enum', d:'查看引导配置'},
      {c:'bcdedit /set {default} safeboot minimal', d:'下次启动进安全模式'},
      {c:'bcdedit /deletevalue {default} safeboot', d:'取消安全模式'},
      {c:'rstrui', d:'打开系统还原'}
    ]},
    { name:'系统修复', key:'I', items:[
      {c:'sfc /scannow', d:'扫描并修复系统文件'},
      {c:'sfc /verifyonly', d:'仅验证不修复'},
      {c:'DISM /Online /Cleanup-Image /CheckHealth', d:'检查系统镜像'},
      {c:'DISM /Online /Cleanup-Image /ScanHealth', d:'扫描镜像损坏'},
      {c:'DISM /Online /Cleanup-Image /RestoreHealth', d:'修复系统镜像'},
      {c:'DISM /Online /Cleanup-Image /StartComponentCleanup', d:'清理组件存储'}
    ]},
    { name:'系统工具快捷', key:'J', items:[
      {c:'eventvwr', d:'事件查看器'},
      {c:'devmgmt.msc', d:'设备管理器'},
      {c:'diskmgmt.msc', d:'磁盘管理'},
      {c:'compmgmt.msc', d:'计算机管理'},
      {c:'taskmgr', d:'任务管理器'},
      {c:'gpedit.msc', d:'组策略（专业版）'},
      {c:'control', d:'控制面板'},
      {c:'ncpa.cpl', d:'网络连接'},
      {c:'appwiz.cpl', d:'程序和功能'},
      {c:'powercfg.cpl', d:'电源选项'},
      {c:'firewall.cpl', d:'Windows 防火墙'},
      {c:'osk', d:'屏幕键盘'},
      {c:'magnify', d:'放大镜'},
      {c:'calc', d:'计算器'},
      {c:'notepad', d:'记事本'},
      {c:'mspaint', d:'画图'},
      {c:'mstsc', d:'远程桌面'},
      {c:'cleanmgr', d:'磁盘清理'},
      {c:'dcomcnfg', d:'组件服务'},
      {c:'odbcad32', d:'ODBC 数据源'}
    ]},
    { name:'激活与授权', key:'K', items:[
      {c:'slmgr /xpr', d:'查看激活状态'},
      {c:'slmgr /dlv', d:'详细授权信息'},
      {c:'slmgr /dli', d:'授权简述'},
      {c:'slmgr /ato', d:'在线激活'},
      {c:'slmgr /upk', d:'卸载产品密钥'},
      {c:'slmgr /ipk 密钥', d:'安装产品密钥'},
      {c:'slmgr /skms 服务器', d:'设置 KMS 服务器'}
    ]},
    { name:'电源与电池', key:'L', items:[
      {c:'powercfg /batteryreport', d:'生成电池报告（HTML）'},
      {c:'powercfg /energy', d:'生成电源效率报告'},
      {c:'powercfg /sleepstudy', d:'生成睡眠研究报告'},
      {c:'powercfg /a', d:'查看支持的睡眠状态'},
      {c:'powercfg /list', d:'列出所有电源计划'},
      {c:'shutdown /s /t 60', d:'60 秒后关机'},
      {c:'shutdown /r /t 0', d:'立即重启'},
      {c:'shutdown /a', d:'取消关机'}
    ]},
    { name:'批处理与变量', key:'M', items:[
      {c:'@echo off', d:'关闭命令回显'},
      {c:'echo 内容', d:'输出内容'},
      {c:'pause', d:'暂停等待按键'},
      {c:'set 变量=值', d:'设置变量'},
      {c:'if exist 文件 ()', d:'条件判断'},
      {c:'for %%i in (*) do echo %%i', d:'遍历文件'},
      {c:'goto 标签', d:'跳转标签'},
      {c:'call 脚本.bat', d:'调用其他批处理'},
      {c:'exit', d:'退出批处理'},
      {c:'start 程序', d:'启动程序'},
      {c:'cls', d:'清屏'},
      {c:'title 标题', d:'设置窗口标题'},
      {c:'color 0A', d:'设置窗口颜色'},
      {c:'time /t', d:'显示当前时间'},
      {c:'date /t', d:'显示当前日期'}
    ]},
    { name:'高级命令', key:'N', items:[
      {c:'takeown /f 文件名', d:'获取文件所有权'},
      {c:'icacls 文件名 /grant 用户名:F', d:'授予完全控制'},
      {c:'cipher /w:C:', d:'擦除 C 盘未使用空间'},
      {c:'openfiles /query', d:'查看打开的文件'},
      {c:'wevtutil qe System /c:10', d:'查询最近 10 条事件'},
      {c:'certutil -hashfile 文件 SHA256', d:'计算文件哈希'},
      {c:'certutil -decode 编码.b64 输出', d:'解码 Base64'},
      {c:'certutil -encode 文件 输出.b64', d:'编码为 Base64'},
      {c:'makecab 源 目标.cab', d:'制作 cab 压缩包'},
      {c:'expand 源.cab 目标', d:'解压 cab 文件'},
      {c:'robocopy 源 目标 /MIR', d:'镜像同步文件夹'},
      {c:'wmic product get name', d:'列出已安装程序'},
      {c:'wmic process list brief', d:'进程简要列表'},
      {c:'wmic startup get caption,command', d:'查看启动项'}
    ]},
    { name:'快捷符号', key:'O', items:[
      {c:'|', d:'管道：前一个命令输出作为后一个输入'},
      {c:'>', d:'输出重定向（覆盖）'},
      {c:'>>', d:'输出重定向（追加）'},
      {c:'<', d:'输入重定向'},
      {c:'&&', d:'前一个成功才执行后一个'},
      {c:'||', d:'前一个失败才执行后一个'},
      {c:'&', d:'无论成败都执行'},
      {c:'*', d:'通配符：任意字符'},
      {c:'?', d:'通配符：单个字符'},
      {c:'%变量%', d:'引用环境变量'},
      {c:'^', d:'转义字符'},
      {c:'::', d:'批处理注释'}
    ]}
  ]
};

/* =========================================================
   游戏数据（3 个子 tab）
   ========================================================= */
const GAME_DATA = {
  tabs:[
    {k:'mini',  n:'小游戏'},
    {k:'cloud', n:'云游戏'},
    {k:'dl',    n:'下载游戏'}
  ],
  mini:{
    intro:'免登录网页小游戏，打开即玩，手机电脑都适配。',
    groups:[
      {name:'综合平台', items:[
        {n:'Poki',         u:'https://poki.com/zh',           d:'上千款免费小游戏'},
        {n:'CrazyGames',   u:'https://www.crazygames.com/',   d:'海量休闲游戏合集'},
        {n:'itch.io',      u:'https://itch.io/games',         d:'独立游戏平台'},
        {n:'Y8',           u:'https://www.y8.com/',           d:'经典小游戏站'},
        {n:'游侠小游戏',    u:'https://www.ali213.net/',       d:'国内小游戏平台'},
        {n:'小猪秒玩',      u:'https://www.xiaozhu.com/',      d:'免安装即玩'}
      ]},
      {name:'经典模拟器', items:[
        {n:'红白机合集',    u:'https://fc.wan1234.com/',       d:'FC 游戏网页版'},
        {n:'在线玩',        u:'https://zaixianwan.app/',       d:'FC/GBA/NDS/PS 模拟器'},
        {n:'PlayEmulator', u:'https://playemulator.io/',      d:'多平台模拟器'},
        {n:'EmulatorGames',u:'https://www.emulatorgames.net/',d:'老游戏模拟器'}
      ]},
      {name:'休闲小游戏', items:[
        {n:'2048',         u:'https://play2048.co/',          d:'经典数字合并'},
        {n:'扫雷在线',      u:'https://minesweeper.online/',   d:'经典扫雷'},
        {n:'数独',          u:'https://sudoku.com/zh/',        d:'每日数独'},
        {n:'Wordle',       u:'https://www.nytimes.com/games/wordle/', d:'猜单词游戏'},
        {n:'Skribbl',      u:'https://skribbl.io/',           d:'你画我猜联机'}
      ]},
      {name:'MC 相关', items:[
        {n:'MC 网页版',     u:'https://classic.minecraft.net/', d:'官方经典版'},
        {n:'MC.js',        u:'https://play.mc.js.cool/',      d:'在线版支持联机'}
      ]}
    ]
  },
  cloud:{
    intro:'无需下载，浏览器直接玩大型游戏。部分平台需要注册账号。',
    groups:[
      {name:'综合云游戏', items:[
        {n:'腾讯 START',    u:'https://start.qq.com/',         d:'LOL/原神/黑神话等'},
        {n:'网易云游戏',    u:'https://cg.163.com/',           d:'网易官方，免下载'},
        {n:'随乐游',        u:'https://www.suiley.com/',       d:'3A 大作网页秒开'},
        {n:'now.gg',       u:'https://now.gg/',               d:'免费云游戏，无需账号'},
        {n:'Netboom',      u:'https://www.netboom.com/',      d:'移动设备玩 PC 游戏'},
        {n:'胖哒云游',      u:'https://www.pandacg.com/',      d:'免账号无需下载'}
      ]},
      {name:'单机云游', items:[
        {n:'云·原神',       u:'https://ys.mihoyo.com/cloud/',  d:'米哈游官方云原神'},
        {n:'云·崩铁',       u:'https://sr.mihoyo.com/cloud/',  d:'星穹铁道云游戏'},
        {n:'云·鸣潮',       u:'https://mc.kurogames.com/cloud/',d:'库洛官方云鸣潮'},
        {n:'云·绝区零',     u:'https://zzz.mihoyo.com/cloud/', d:'米哈游云游戏'},
        {n:'弘电脑',        u:'https://www.hong.com/',         d:'手机变云电脑'}
      ]}
    ]
  },
  dl:{
    intro:'正版游戏下载平台与资源站，一键装游戏。',
    groups:[
      {name:'正版平台', items:[
        {n:'Steam',        u:'https://store.steampowered.com/', d:'全球最大 PC 游戏平台'},
        {n:'Epic Games',   u:'https://www.epicgames.com/',      d:'每周免费领游戏'},
        {n:'GOG',          u:'https://www.gog.com/',            d:'无 DRM 正版游戏'},
        {n:'Ubisoft',      u:'https://www.ubisoft.com/',        d:'育碧官方平台'},
        {n:'EA App',       u:'https://www.ea.com/',             d:'EA 官方平台'},
        {n:'Battle.net',   u:'https://www.blizzard.com/',       d:'暴雪战网'},
        {n:'Rockstar',     u:'https://www.rockstargames.com/',  d:'R星官方平台'},
        {n:'WeGame',       u:'https://www.wegame.com.cn/',      d:'腾讯游戏平台'}
      ]},
      {name:'加速工具', items:[
        {n:'UU加速器',      u:'https://uu.163.com/',            d:'网易游戏加速'},
        {n:'迅游加速器',    u:'https://www.xunyou.com/',        d:'老牌游戏加速'},
        {n:'雷神加速器',    u:'https://www.leigod.com/',        d:'游戏加速器'},
        {n:'Steam++',      u:'https://steampp.net/',           d:'开源 Steam 工具'}
      ]},
      {name:'游戏资讯', items:[
        {n:'游民星空',      u:'https://www.gamersky.com/',      d:'国内游戏资讯'},
        {n:'3DM',          u:'https://www.3dmgame.com/',       d:'游戏资讯与补丁'},
        {n:'游侠网',        u:'https://www.ali213.net/',        d:'游戏资讯与汉化'}
      ]}
    ]
  }
};

/* =========================================================
   DOM 引用
   ========================================================= */
const tabsEl      = document.getElementById('tabs');
const contentEl   = document.getElementById('content');
const themeBtn    = document.getElementById('themeBtn');
const settingsBtn = document.getElementById('settingsBtn');

/* =========================================================
   状态
   ========================================================= */
let curCat = 'home';

let favs;
try { favs = new Set(JSON.parse(localStorage.getItem('cx_favs') || '[]')); } catch (e) { favs = new Set(); }
function saveFavs(){ try { localStorage.setItem('cx_favs', JSON.stringify([...favs])); }catch(e){} }

/* =========================================================
   设置
   ========================================================= */
const SETTINGS_KEY = 'cx_settings_v4';
const SETTINGS_DEFAULT = {
  mode:'auto',
  accent:'',
  layout:'grid',
  radius:14,
  fs:'normal',
  motion:true,
  gradient:false
};
const FS_LIST  = ['small','normal','large','xl'];
const FS_LABEL = ['小','标准','大','特大'];
const FS_INDEX = {small:0, normal:1, large:2, xl:3};

let settings = Object.assign({}, SETTINGS_DEFAULT);
try{
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (raw){
    const obj = JSON.parse(raw);
    if (obj && typeof obj === 'object') settings = Object.assign(settings, obj);
  }
}catch(e){}

function saveSettings(){
  try{ localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); }catch(e){}
}

function resolveDark(){
  if (settings.mode === 'dark') return true;
  if (settings.mode === 'light') return false;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function hexToRgb(h){
  h = String(h).replace('#','');
  if (h.length === 3) h = h.split('').map(function(c){ return c + c; }).join('');
  const n = parseInt(h, 16);
  if (isNaN(n)) return null;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function applySettings(){
  const isDark = resolveDark();
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

  if (settings.accent){
    document.documentElement.style.setProperty('--accent', settings.accent);
    const rgb = hexToRgb(settings.accent);
    if (rgb){
      const a = isDark ? .16 : .1;
      document.documentElement.style.setProperty('--accent-soft',
        'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + a + ')');
    }
  } else {
    document.documentElement.style.removeProperty('--accent');
    document.documentElement.style.removeProperty('--accent-soft');
  }

  document.body.classList.remove('layout-list','layout-tile');
  if (settings.layout === 'list') document.body.classList.add('layout-list');
  else if (settings.layout === 'tile') document.body.classList.add('layout-tile');

  document.documentElement.setAttribute('data-fs', settings.fs || 'normal');
  document.documentElement.style.setProperty('--radius', (settings.radius || 14) + 'px');

  document.body.classList.toggle('no-motion', settings.motion === false);
  document.body.classList.toggle('gradient-bg', !!settings.gradient);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', isDark ? '#0f1117' : '#f5f6fa');
}

/* =========================================================
   工具函数
   ========================================================= */
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}

function copyText(text){
  if (navigator.clipboard && navigator.clipboard.writeText){
    return navigator.clipboard.writeText(text);
  }
  return new Promise(function(resolve, reject){
    try{
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      ta.setAttribute('readonly','');
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, 99999);
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      if (ok) resolve(); else reject(new Error('copy failed'));
    }catch(err){ reject(err); }
  });
}

/* =========================================================
   分类标签
   ========================================================= */
function buildTabs(){
  let html = '';
  CATS.forEach(function(c){
    html += '<button class="tab' + (c.k === curCat ? ' active' : '') +
            '" data-cat="' + c.k + '">' +
            icon(c.i, 14, 2.2) +
            '<span>' + esc(c.n) + '</span></button>';
  });
  tabsEl.innerHTML = html;
}

/* =========================================================
   卡片
   ========================================================= */
function makeCard(s){
  const a = document.createElement('a');
  a.className = 'card';
  a.href = s.u;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.dataset.u    = s.u;
  a.dataset.name = s.n;
  a.dataset.desc = s.d;
  a.dataset.cat  = s.c || '';

  const on = favs.has(s.u);
  a.innerHTML =
    '<span class="fav-btn' + (on ? ' on' : '') + '" role="button" aria-label="收藏">' +
      icon('star', 12, 2) +
    '</span>' +
    '<span class="card-ico" data-c="' + esc(s.c) + '">' + esc(s.n.charAt(0)) + '</span>' +
    '<span class="card-info">' +
      '<span class="card-nm">' + esc(s.n) + '</span>' +
      '<span class="card-ds">' + esc(s.d) + '</span>' +
    '</span>';
  return a;
}

function makeCardsGrid(items){
  const grid = document.createElement('div');
  grid.className = 'cards';
  items.forEach(function(s){ grid.appendChild(makeCard(s)); });
  return grid;
}

/* =========================================================
   按子分组渲染站点
   ========================================================= */
function makeGroupedSites(sites){
  const frag = document.createDocumentFragment();

  const order = [];
  const map = {};
  sites.forEach(function(s){
    const g = s.g || '其他';
    if (!map[g]){ map[g] = []; order.push(g); }
    map[g].push(s);
  });

  order.forEach(function(g){
    const items = map[g];
    const sec = document.createElement('section');
    sec.className = 'group';
    sec.innerHTML =
      '<h2 class="group-h">' +
        '<span class="group-dot"></span>' +
        '<span>' + esc(g) + '</span>' +
        '<span class="group-count">' + items.length + '</span>' +
      '</h2>';
    sec.appendChild(makeCardsGrid(items));
    frag.appendChild(sec);
  });

  return frag;
}

/* =========================================================
   首页
   ========================================================= */
function makeHomeSection(){
  const sec = document.createElement('section');
  sec.className = 'home';

  const totalSites = SITES.length;
  let totalCmd = 0;
  CMD_DATA.groups.forEach(function(g){ totalCmd += g.items.length; });
  let totalKeys = 0;
  Object.keys(KEYBOARD_DATA).forEach(function(k){
    KEYBOARD_DATA[k].groups.forEach(function(g){ totalKeys += g.items.length; });
  });
  let totalGames = 0;
  GAME_DATA.tabs.forEach(function(t){
    GAME_DATA[t.k].groups.forEach(function(g){ totalGames += g.items.length; });
  });

  sec.innerHTML =
    '<div class="home-hero">' +
      '<h2>电脑工具箱</h2>' +
      '<p>这是一个windows快捷工具网站。' +
        '把装机维修、系统维护、常用命令、windows应用、快捷键、在线工具、AI 助手、编程资源和游戏整合在一起。' +
        '</p>' +
      '<p>' +
        '</p>' +
    '</div>' +

    '<div class="home-stats">' +
      '<div class="stat-card"><div class="stat-num">' + totalSites + '</div><div class="stat-label">收录站点</div></div>' +
      '<div class="stat-card"><div class="stat-num">' + totalCmd + '</div><div class="stat-label">CMD 指令</div></div>' +
      '<div class="stat-card"><div class="stat-num">' + totalKeys + '</div><div class="stat-label">快捷键</div></div>' +
      '<div class="stat-card"><div class="stat-num">' + totalGames + '</div><div class="stat-label">游戏入口</div></div>' +
    '</div>' +

    '<div class="home-quick">' +
      '<h3>快速入口</h3>' +
      '<div class="home-quick-grid" id="quickGrid"></div>' +
    '</div>' +

    '<div class="home-tips">' +
      '<h3>使用说明</h3>' +
      '<ul>' +
        '<li>顶部标签切换分类，长按卡片查看用途，右上角按钮切换明暗主题和设置。</li>' +
        '<li>CMD 指令区的每条命令都可以点击右侧按钮一键复制，粘贴到管理员终端运行。</li>' +
        '<li>游戏区分为小游戏、云游戏和下载游戏，云游戏无需下载，浏览器直接玩。</li>' +
        '<li>设置里的排列样式、主题色、圆角、字体等会自动保存到浏览器。</li>' +
      '</ul>' +
    '</div>';

  // 快速入口按钮
  setTimeout(function(){
    const qg = sec.querySelector('#quickGrid');
    if (!qg) return;
    const quick = [
      {k:'fix',  i:'wrench',   n:'维修装机', d:'硬件检测与系统安装'},
      {k:'cmd',  i:'terminal', n:'CMD 指令', d:'快捷命令'},
      {k:'key',  i:'key',      n:'win快捷键',   d:' 与常用软件'},
      {k:'tool', i:'grid',     n:'在线工具', d:'免安装即用'},
      {k:'ai',   i:'spark',    n:'AI 助手',  d:'对话与生成'},
      {k:'game', i:'gamepad',  n:'游戏',     d:'小游戏与云游戏'}
    ];
    quick.forEach(function(q){
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'quick-card';
      b.dataset.goto = q.k;
      b.innerHTML =
        '<span class="qc-ico">' + icon(q.i, 16, 2.2) + '</span>' +
        '<span class="qc-info">' +
          '<span class="qc-name">' + esc(q.n) + '</span>' +
          '<span class="qc-desc">' + esc(q.d) + '</span>' +
        '</span>';
      qg.appendChild(b);
    });
  }, 0);

  return sec;
}

/* =========================================================
   快捷键列表
   ========================================================= */
function makeKeyboardPanel(version){
  const data = KEYBOARD_DATA[version];
  const panel = document.createElement('div');
  panel.className = 'kb-panel';
  panel.dataset.ver = version;

  data.groups.forEach(function(g){
    const sec = document.createElement('section');
    sec.className = 'group';
    sec.innerHTML =
      '<h2 class="group-h">' +
        '<span class="group-dot"></span>' +
        '<span>' + esc(g.name) + '</span>' +
        '<span class="group-count">' + g.items.length + '</span>' +
      '</h2>';

    const list = document.createElement('div');
    list.className = 'kb-list';

    g.items.forEach(function(item){
      // item: [key1, key2, ..., 功能名, 用法]
      const keys = [];
      for (let i = 0; i < item.length - 2; i++){
        if (item[i] !== '') keys.push(item[i]);
      }
      const name  = item[item.length - 2];
      const usage = item[item.length - 1];

      let comboHtml = '<div class="kb-combo">';
      keys.forEach(function(k, ki){
        if (ki > 0) comboHtml += '<span class="kb-key plus">+</span>';
        comboHtml += '<span class="kb-key">' + esc(k) + '</span>';
      });
      comboHtml += '</div>';

      const div = document.createElement('div');
      div.className = 'kb-item';
      div.innerHTML = comboHtml +
        '<div class="kb-desc">' + esc(name) +
        (usage ? '<small>' + esc(usage) + '</small>' : '') +
        '</div>';
      list.appendChild(div);
    });

    sec.appendChild(list);
    panel.appendChild(sec);
  });

  return panel;
}

function makeKeyboardSection(){
  const sec = document.createElement('section');

  // 子 tab
  const versions = ['win7','win10','win11','chrome','office','vscode'];
  const sw = document.createElement('div');
  sw.className = 'subtabs';
  versions.forEach(function(v, i){
    sw.innerHTML += '<button class="subtab' + (i === 0 ? ' active' : '') +
      '" data-kb="' + v + '">' + esc(KEYBOARD_DATA[v].label) + '</button>';
  });
  sec.appendChild(sw);

  // 面板容器
  const wrap = document.createElement('div');
  wrap.id = 'kbWrap';
  versions.forEach(function(v, i){
    const p = makeKeyboardPanel(v);
    if (i === 0){
      p.classList.add('on');
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
    wrap.appendChild(p);
  });
  sec.appendChild(wrap);

  return sec;
}

/* =========================================================
   CMD 字典
   ========================================================= */
function makeCmdSection(){
  const sec = document.createElement('section');

  const intro = document.createElement('div');
  intro.className = 'cmd-intro';
  intro.innerHTML = icon('info', 14, 2) + '<span>' + esc(CMD_DATA.intro) + '</span>';
  sec.appendChild(intro);

  // A-Z 索引
  const az = document.createElement('div');
  az.className = 'cmd-az';
  const used = {};
  CMD_DATA.groups.forEach(function(g){ used[g.key] = true; });
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function(L){
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'cmd-az-btn' + (used[L] ? ' has' : '');
    b.dataset.az = L;
    b.textContent = L;
    if (!used[L]) b.disabled = true;
    az.appendChild(b);
  });
  sec.appendChild(az);

  // 分组
  CMD_DATA.groups.forEach(function(g){
    const sub = document.createElement('div');
    sub.className = 'cmd-group';
    sub.innerHTML =
      '<h2 class="cmd-group-h" id="cmd-' + g.key + '">' +
        '<span class="group-dot"></span>' +
        '<span>' + esc(g.name) + '</span>' +
        '<span class="group-count">' + g.items.length + '</span>' +
      '</h2>';

    const list = document.createElement('div');
    list.className = 'cmd-list';

    g.items.forEach(function(it){
      const row = document.createElement('div');
      row.className = 'cmd-item';
      row.dataset.cmd = it.c;
      row.innerHTML =
        '<div class="cmd-body">' +
          '<code class="cmd-text">' + esc(it.c) + '</code>' +
          '<span class="cmd-desc">' + esc(it.d) + '</span>' +
        '</div>' +
        '<button type="button" class="cmd-copy" aria-label="复制指令">' +
          icon('copy', 15, 2) +
        '</button>';
      list.appendChild(row);
    });

    sub.appendChild(list);
    sec.appendChild(sub);
  });

  return sec;
}

/* =========================================================
   游戏
   ========================================================= */
function makeGameSection(){
  const sec = document.createElement('section');

  // 子 tab
  const sw = document.createElement('div');
  sw.className = 'subtabs';
  GAME_DATA.tabs.forEach(function(t, i){
    sw.innerHTML += '<button class="subtab' + (i === 0 ? ' active' : '') +
      '" data-game="' + t.k + '">' + esc(t.n) + '</button>';
  });
  sec.appendChild(sw);

  // 面板容器
  const wrap = document.createElement('div');
  wrap.id = 'gameWrap';

  GAME_DATA.tabs.forEach(function(t, i){
    const p = document.createElement('div');
    p.className = 'game-panel';
    p.dataset.game = t.k;

    
    if (i === 0){
      p.classList.add('on');
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }

    const data = GAME_DATA[t.k];

    const intro = document.createElement('div');
    intro.className = 'cmd-intro';
    intro.innerHTML = icon('info', 14, 2) + '<span>' + esc(data.intro) + '</span>';
    p.appendChild(intro);

    data.groups.forEach(function(g){
      const sub = document.createElement('section');
      sub.className = 'group';
      sub.style.marginTop = '16px';
      sub.innerHTML =
        '<h2 class="group-h">' +
          '<span class="group-dot"></span>' +
          '<span>' + esc(g.name) + '</span>' +
          '<span class="group-count">' + g.items.length + '</span>' +
        '</h2>';
      sub.appendChild(makeCardsGrid(g.items));
      p.appendChild(sub);
    });

    wrap.appendChild(p);
  });
  sec.appendChild(wrap);

  return sec;
}

/* =========================================================
   渲染主逻辑
   ========================================================= */
function render(){
  contentEl.innerHTML = '';

  if (curCat === 'home'){
    contentEl.appendChild(makeHomeSection());
  } else if (curCat === 'key'){
    contentEl.appendChild(makeKeyboardSection());
  } else if (curCat === 'cmd'){
    contentEl.appendChild(makeCmdSection());
  } else if (curCat === 'game'){
    contentEl.appendChild(makeGameSection());
  } else {
    const items = SITES.filter(function(s){ return s.c === curCat; });
    if (items.length){
      contentEl.appendChild(makeGroupedSites(items));
    } else {
      const e = document.createElement('div');
      e.className = 'empty';
      e.innerHTML =
        '<div class="empty-ico">' + icon('info', 22, 1.8) + '</div>' +
        '<p>这个分类还没有内容</p>';
      contentEl.appendChild(e);
    }
  }

  // 重新触发淡入动画
  contentEl.style.animation = 'none';
  void contentEl.offsetWidth;
  contentEl.style.animation = '';
}

/* =========================================================
   收藏（事件委托）
   ========================================================= */
document.addEventListener('click', function(e){
  const favBtn = e.target.closest('.fav-btn');
  if (favBtn){
    e.preventDefault();
    e.stopPropagation();
    const cardEl = favBtn.closest('.card');
    if (!cardEl) return;
    const u = cardEl.dataset.u;
    if (favs.has(u)) favs.delete(u); else favs.add(u);
    saveFavs();
    favBtn.classList.toggle('on', favs.has(u));
    return;
  }
}, false);

/* =========================================================
   分类切换
   ========================================================= */
tabsEl.addEventListener('click', function(e){
  const t = e.target.closest('.tab');
  if (!t || t.classList.contains('active')) return;
  curCat = t.dataset.cat;
  const all = tabsEl.querySelectorAll('.tab');
  for (let i = 0; i < all.length; i++) all[i].classList.toggle('active', all[i] === t);
  if (t.scrollIntoView) t.scrollIntoView({inline:'center', block:'nearest', behavior:'smooth'});
  render();
  window.scrollTo({top:0, behavior:'smooth'});
}, false);

/* =========================================================
   首页快速入口
   ========================================================= */
contentEl.addEventListener('click', function(e){
  const q = e.target.closest('[data-goto]');
  if (!q) return;
  const target = q.dataset.goto;
  const tabBtn = tabsEl.querySelector('.tab[data-cat="' + target + '"]');
  if (tabBtn) tabBtn.click();
}, false);

/* =========================================================
   快捷键版本切换
   ========================================================= */
document.addEventListener('click', function(e){
  const btn = e.target.closest('.subtab[data-kb]');
  if (!btn) return;
  const ver = btn.dataset.kb;
  const sw = btn.parentElement;
  const wrap = sw.parentElement.querySelector('#kbWrap');
  if (!wrap) return;

  sw.querySelectorAll('.subtab').forEach(function(b){ b.classList.toggle('active', b === btn); });
  wrap.querySelectorAll('.kb-panel').forEach(function(p){
    const m = p.dataset.ver === ver;
    p.classList.toggle('on', m);
    p.style.display = m ? 'block' : 'none';
  });
}, false);

/* =========================================================
   游戏子 tab 切换（修复：用 block 不用空字符串）
   ========================================================= */
document.addEventListener('click', function(e){
  const btn = e.target.closest('.subtab[data-game]');
  if (!btn) return;
  const key = btn.dataset.game;
  const sw = btn.parentElement;
  const wrap = sw.parentElement.querySelector('#gameWrap');
  if (!wrap) return;

  sw.querySelectorAll('.subtab').forEach(function(b){ b.classList.toggle('active', b === btn); });
  wrap.querySelectorAll('.game-panel').forEach(function(p){
    const m = p.dataset.game === key;
    p.classList.toggle('on', m);
    p.style.display = m ? 'block' : 'none';
  });
}, false);

/* =========================================================
   CMD 复制 & A-Z 跳转
   ========================================================= */
contentEl.addEventListener('click', function(e){
  const copyBtn = e.target.closest('.cmd-copy');
  if (copyBtn){
    e.preventDefault();
    e.stopPropagation();
    const row = copyBtn.closest('.cmd-item');
    if (!row) return;
    const text = row.dataset.cmd || '';
    copyText(text).then(function(){
      const old = copyBtn.innerHTML;
      copyBtn.innerHTML = icon('check', 15, 2.4);
      copyBtn.classList.add('copied');
      setTimeout(function(){
        copyBtn.innerHTML = old;
        copyBtn.classList.remove('copied');
      }, 1300);
    }).catch(function(){
      const old = copyBtn.innerHTML;
      copyBtn.textContent = '✕';
      setTimeout(function(){ copyBtn.innerHTML = old; }, 1000);
    });
    return;
  }

  const azBtn = e.target.closest('.cmd-az-btn');
  if (azBtn && !azBtn.disabled){
    const L = azBtn.dataset.az;
    const target = document.getElementById('cmd-' + L);
    if (target){
      const offset = target.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({top: offset, behavior:'smooth'});
    }
  }
}, false);

/* =========================================================
   长按浮层
   ========================================================= */
(function initLongPress(){
  const tipPop   = document.getElementById('tipPop');
  const tipTitle = document.getElementById('tipTitle');
  const tipText  = document.getElementById('tipText');
  if (!tipPop) return;

  let pressTimer = 0;
  let startX = 0, startY = 0;
  let targetCard = null;
  let fired = false;

  function showTip(name, desc){
    tipTitle.textContent = name;
    tipText.textContent  = desc;
    tipPop.hidden = false;
    void tipPop.offsetWidth;
    tipPop.classList.add('on');
  }
  function hideTip(){
    tipPop.classList.remove('on');
    setTimeout(function(){ tipPop.hidden = true; }, 220);
  }

  tipPop.addEventListener('click', hideTip);

  document.addEventListener('pointerdown', function(e){
    if (e.button !== undefined && e.button !== 0) return;
    const card = e.target.closest('.card');
    if (!card) return;
    if (e.target.closest('.fav-btn')) return;

    targetCard = card;
    startX = e.clientX;
    startY = e.clientY;
    fired = false;

    clearTimeout(pressTimer);
    pressTimer = setTimeout(function(){
      if (!targetCard) return;
      fired = true;
      showTip(targetCard.dataset.name || '', targetCard.dataset.desc || '');
      if (navigator.vibrate) navigator.vibrate(15);
    }, 550);
  }, {passive:true});

  document.addEventListener('pointermove', function(e){
    if (!targetCard) return;
    const dx = Math.abs(e.clientX - startX);
    const dy = Math.abs(e.clientY - startY);
    if (dx > 8 || dy > 8){
      clearTimeout(pressTimer);
      targetCard = null;
    }
  }, {passive:true});

  document.addEventListener('pointerup', function(e){
    clearTimeout(pressTimer);
    if (fired){
      e.preventDefault();
      e.stopPropagation();
    }
    targetCard = null;
    fired = false;
  }, true);

  document.addEventListener('pointercancel', function(){
    clearTimeout(pressTimer);
    targetCard = null;
    fired = false;
  });
})();

/* =========================================================
   顶部滚动阴影
   ========================================================= */
(function(){
  const hd = document.querySelector('.hd');
  if (!hd) return;
  let ticking = false;
  window.addEventListener('scroll', function(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      hd.classList.toggle('scrolled', window.scrollY > 8);
      ticking = false;
    });
  }, {passive:true});
})();

/* =========================================================
   主题快捷按钮
   ========================================================= */
themeBtn.addEventListener('click', function(){
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  settings.mode = isDark ? 'light' : 'dark';
  saveSettings();
  applySettings();
  syncSettingsUI();
}, false);

/* =========================================================
   侧边栏设置
   ========================================================= */
const drawer      = document.getElementById('drawer');
const drawerMask  = document.getElementById('drawerMask');
const drawerClose = document.getElementById('drawerClose');

function openDrawer(){
  drawer.classList.add('on');
  drawer.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeDrawer(){
  drawer.classList.remove('on');
  drawer.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

settingsBtn.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerMask.addEventListener('click', closeDrawer);
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape' && drawer.classList.contains('on')) closeDrawer();
});

/* 主题模式 */
document.querySelectorAll('.set-opts[data-key="mode"] .set-opt').forEach(function(btn){
  btn.addEventListener('click', function(){
    settings.mode = btn.dataset.v;
    saveSettings();
    applySettings();
    syncSettingsUI();
  });
});

/* 主题色 */
document.querySelectorAll('.color-dot[data-c]').forEach(function(btn){
  btn.addEventListener('click', function(){
    settings.accent = btn.dataset.c;
    saveSettings();
    applySettings();
    syncSettingsUI();
  });
});

const colorInput = document.getElementById('colorInput');
if (colorInput){
  colorInput.addEventListener('input', function(){
    settings.accent = colorInput.value;
    saveSettings();
    applySettings();
    syncSettingsUI();
  });
}

/* 排列样式 */
document.querySelectorAll('.set-opts[data-key="layout"] .set-opt').forEach(function(btn){
  btn.addEventListener('click', function(){
    settings.layout = btn.dataset.v;
    saveSettings();
    applySettings();
    syncSettingsUI();
  });
});

/* 圆角 */
const radiusRange = document.getElementById('radiusRange');
const radiusVal   = document.getElementById('radiusVal');
if (radiusRange){
  radiusRange.addEventListener('input', function(){
    const v = parseInt(radiusRange.value, 10) || 14;
    settings.radius = v;
    radiusVal.textContent = v + 'px';
    applySettings();
  });
  radiusRange.addEventListener('change', saveSettings);
}

/* 字体 */
const fsRange = document.getElementById('fsRange');
const fsVal   = document.getElementById('fsVal');
if (fsRange){
  fsRange.addEventListener('input', function(){
    const idx = parseInt(fsRange.value, 10) || 1;
    settings.fs = FS_LIST[idx];
    fsVal.textContent = FS_LABEL[idx];
    applySettings();
  });
  fsRange.addEventListener('change', saveSettings);
}

/* 动效开关 */
const motionSwitch = document.getElementById('motionSwitch');
if (motionSwitch){
  motionSwitch.addEventListener('click', function(){
    const on = !motionSwitch.classList.contains('active');
    motionSwitch.classList.toggle('active', on);
    settings.motion = on;
    saveSettings();
    applySettings();
  });
}

/* 渐变开关 */
const gradientSwitch = document.getElementById('gradientSwitch');
if (gradientSwitch){
  gradientSwitch.addEventListener('click', function(){
    const on = !gradientSwitch.classList.contains('active');
    gradientSwitch.classList.toggle('active', on);
    settings.gradient = on;
    saveSettings();
    applySettings();
  });
}

/* 重置 */
const resetBtn = document.getElementById('resetBtn');
if (resetBtn){
  resetBtn.addEventListener('click', function(){
    settings = Object.assign({}, SETTINGS_DEFAULT);
    saveSettings();
    applySettings();
    syncSettingsUI();
  });
}

/* 同步 UI */
function syncSettingsUI(){
  document.querySelectorAll('.set-opts[data-key="mode"] .set-opt').forEach(function(b){
    b.classList.toggle('active', b.dataset.v === settings.mode);
  });
  document.querySelectorAll('.color-dot[data-c]').forEach(function(b){
    b.classList.toggle('active', settings.accent && b.dataset.c.toLowerCase() === settings.accent.toLowerCase());
  });
  if (colorInput && settings.accent) colorInput.value = settings.accent;
  document.querySelectorAll('.set-opts[data-key="layout"] .set-opt').forEach(function(b){
    b.classList.toggle('active', b.dataset.v === settings.layout);
  });
  if (radiusRange){
    radiusRange.value = settings.radius || 14;
    radiusVal.textContent = (settings.radius || 14) + 'px';
  }
  if (fsRange){
    const idx = FS_INDEX[settings.fs] != null ? FS_INDEX[settings.fs] : 1;
    fsRange.value = idx;
    fsVal.textContent = FS_LABEL[idx];
  }
  if (motionSwitch)   motionSwitch.classList.toggle('active', settings.motion !== false);
  if (gradientSwitch) gradientSwitch.classList.toggle('active', !!settings.gradient);
}

/* =========================================================
   系统主题变化
   ========================================================= */
if (window.matchMedia){
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = function(){
    if (settings.mode === 'auto') applySettings();
  };
  if (mq.addEventListener) mq.addEventListener('change', handler);
  else if (mq.addListener) mq.addListener(handler);
}

/* =========================================================
   初始化
   ========================================================= */
(function init(){
  applySettings();
  buildTabs();
  render();
  syncSettingsUI();
})();