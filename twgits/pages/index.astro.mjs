import { c as createComponent, s as spreadAttributes, u as unescapeHTML, r as renderTemplate, a as createAstro, b as addAttribute, m as maybeRenderHead, d as renderComponent, e as renderHead, f as renderSlot } from '../chunks/astro/server_DRQ82Z5g.mjs';
import 'piccolore';
/* empty css                                 */
import 'clsx';
import { defineComponent, useSSRContext, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
export { renderers } from '../renderers.mjs';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const logo = createSvgComponent({"meta":{"src":"/twgits/_astro/logo.CR7gePNr.svg","width":161,"height":64,"format":"svg"},"attributes":{"width":"161","height":"64","viewBox":"0 0 161 64","fill":"none"},"children":"\n<rect width=\"160.386\" height=\"64\" fill=\"url(#pattern0_198_2)\" />\n<defs>\n<pattern id=\"pattern0_198_2\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n<use xlink:href=\"#image0_198_2\" transform=\"matrix(0.00141044 0 0 0.00353459 0 -0.12739)\" />\n</pattern>\n<image id=\"image0_198_2\" width=\"709\" height=\"355\" preserveAspectRatio=\"none\" xlink:href=\"data:image/jpeg;base64,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\" />\n</defs>\n"});

const seoDefaults = {
  title: "台灣聚特 GITS",
  description: "台灣聚特是業界唯一全程使用建築資訊模型(BIN)的專業鋁模板供應商。台灣聚特是業界唯一全程使用建築資訊模型(BIN)的專業鋁模板供應商。",
  ogImage: location.origin + logo.src,
  canonical: "https://twgits.com",
  keywords: "鋁模板，鋁合金模板，台灣聚特, GITS"
  // structuredData: {},
};

const favicon = "/twgits/_astro/favicon.Dl0KXaQk.ico";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SEO;
  const props = { ...seoDefaults, ...Astro2.props };
  const { title, description, ogImage, canonical, noindex, structuredData, keywords } = props;
  return renderTemplate`<title>${title}</title><meta name="description"${addAttribute(description, "content")}>${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}${noindex && renderTemplate`<meta name="robots" content="noindex">`}${keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`}<!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:type" content="article"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><!-- Favicon and Manifest --><link rel="icon"${addAttribute(favicon, "href")}><!-- <link rel="manifest" href="/site.webmanifest" /> --><!-- Structured Data -->${structuredData && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n    {JSON.stringify(structuredData)}\n<\/script>'])))}`;
}, "/Users/purin/Documents/git/git/gits/src/components/Global/SEO.astro", void 0);

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Header",
  setup(__props, { expose: __expose }) {
    __expose();
    const navItems = [
      { text: "\u95DC\u65BCGITS", href: "#about" },
      { text: "\u7DA0\u8272\u6C38\u7E8C", href: "#green" },
      { text: "\u52A0\u5165\u805A\u7279", href: "#join-us" },
      { text: "\u806F\u7D61\u6211\u5011", href: "#contact" }
    ];
    const isOpen = ref(false);
    const isAnimating = ref(false);
    const toggle = () => {
      isOpen.value = !isOpen.value;
      isAnimating.value = true;
    };
    const onAnimEnd = (e) => {
      if (isAnimating.value) {
        isAnimating.value = false;
      }
    };
    const __returned__ = { navItems, isOpen, isAnimating, toggle, onAnimEnd, get logo() {
      return logo;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 z-50 w-full" }, _attrs))}><nav class="relative z-50 bg-gits-light"><div class="flex h-[64px] justify-between"><div class="flex items-center"><img class="h-full"${ssrRenderAttr("src", $setup.logo.src)} alt="Gits Logo"></div><div class="menu-item hidden items-center gap-x-1 md:flex"><!--[-->`);
  ssrRenderList($setup.navItems, (item) => {
    _push(`<a${ssrRenderAttr("href", item.href)} class="flex h-full items-center p-4 text-body-5-b text-gits-main hover:text-gits-light">${ssrInterpolate(item.text)}</a>`);
  });
  _push(`<!--]--></div><div class="mx-1 flex items-center md:hidden"><button id="hamburger" class="relative flex h-[64px] w-[64px] flex-col items-center justify-between p-[20px]"><span class="${ssrRenderClass([
    $setup.isOpen ? "translate-y-[10.5px] rotate-45 transform" : "",
    "hamburger-line"
  ])}"></span><span class="${ssrRenderClass([$setup.isOpen ? "opacity-0" : "", "hamburger-line"])}"></span><span class="${ssrRenderClass([
    $setup.isOpen ? "-translate-y-[10.5px] -rotate-45 transform" : "",
    "hamburger-line"
  ])}"></span></button></div></div></nav><div class="${ssrRenderClass([$setup.isOpen ? "animate__fadeInDown" : "animate__fadeOutUp", "animate__animated animate__faster fixed w-full bg-gits-light shadow-2xl md:hidden"])}" style="${ssrRenderStyle($setup.isOpen || $setup.isAnimating ? null : { display: "none" })}"><div class="flex flex-col items-center"><!--[-->`);
  ssrRenderList($setup.navItems, (item) => {
    _push(`<a${ssrRenderAttr("href", item.href)} class="w-full px-4 py-10 text-center text-h5-16-b text-gits-main hover:text-gits-light tablet:text-body-5-b">${ssrInterpolate(item.text)}</a>`);
  });
  _push(`<!--]--></div></div></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Global/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="flex justify-between mx-5 my-7 text-body-4-r h-16"> <p class="my-auto text-gits-main">Copyright © 2021-${year} GITS台灣聚特</p> <p class="my-auto">
designed by <a href="https://linktr.ee/thunple" target="_blank">
ThunPle
</a> </p> </footer>`;
}, "/Users/purin/Documents/git/git/gits/src/components/Global/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { frontmatter } = Astro2.props;
  const cdnFonts = "https://fonts.cdnfonts.com";
  const imperialOne = `${cdnFonts}/css/imperial-one`;
  const googleFonts = "https://fonts.googleapis.com";
  const notoSansTC = `${googleFonts}/css2?family=Noto+Sans+TC:wght@400;700&display=swap`;
  return renderTemplate`<html lang="zh-tw"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width">${renderComponent($$result, "SEO", $$SEO, { ...frontmatter })}<link rel="preconnect"${addAttribute(cdnFonts, "href")}><link rel="preload"${addAttribute(imperialOne, "href")} as="style"><link rel="stylesheet"${addAttribute(imperialOne, "href")}><link rel="preconnect"${addAttribute(googleFonts, "href")}><link rel="preload"${addAttribute(notoSansTC, "href")} as="style"><link rel="stylesheet"${addAttribute(notoSansTC, "href")}><!-- <link
            rel='preload'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
            as='style'
        /> -->${renderHead()}</head> <body> ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Global/Header.vue", "client:component-export": "default" })} <main class="mt-[64px]"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/purin/Documents/git/git/gits/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$TimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const {
    ratio = { left: 1, right: 1 },
    line = { top: 5, width: 0.5 },
    dot = { size: 2.5, spacing: 4, top: 11, class: "center" },
    dotOffset = { x: 0.17, y: 4 },
    items = [],
    style
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${style ? style.outer : ""}`, "class")}> ${items.map((item, i) => renderTemplate`<div${addAttribute(`relative grid grid-cols-3 gap-x-17`, "class")}${addAttribute(`grid-template-columns: ${typeof ratio.left === "number" ? ratio.left + "fr" : ratio.left} ${dot.size}rem ${typeof ratio.right === "number" ? ratio.right + "fr" : ratio.right};`, "style")}> <div${addAttribute(style ? style.left : "", "class")}>${unescapeHTML(item.left)}</div> <div class="relative h-full flex"${addAttribute({
    overflow: i === items.length - 1 ? "hidden" : ""
  }, "style")}> <div${addAttribute(`bg-gits-main ${dot.class}`, "class")}${addAttribute({
    width: `${dot.size}rem`,
    height: `${dot.size}rem`,
    marginTop: `${dot.top}rem`
  }, "style")}></div> <div class="absolute h-full bg-gits-main"${addAttribute({
    left: `${dot.size / 2 - dotOffset.x}rem`,
    top: `${line.top}rem`,
    width: `${line.width}rem`
  }, "style")}></div> </div> <div${addAttribute(`${style ? style.right : ""}`, "class")}>${unescapeHTML(item.right)}</div> </div>`)} </div>`;
}, "/Users/purin/Documents/git/git/gits/src/components/UI/TimeLine.astro", void 0);

const crown = new Proxy({"src":"/twgits/_astro/crown.DPT73jgJ.png","width":77,"height":77,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/icon/crown.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/icon/crown.png");
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  const TimeLineData = {
    items: [
      {
        left: "2021\u5E74",
        right: "\u5168\u570B\u9996\u5BB6\u5168\u6D41\u7A0B\u63A1\u5EFA\u7BC9\u8CC7\u8A0A\u6A21\u578B\u4F5C\u696D\u4E4B\u5C08\u696D\u92C1\u6A21\u677F\u4F9B\u61C9\u5546"
      },
      {
        left: "2022\u5E74",
        right: "\u96F2\u6797\u5009\u5132\u5EE0"
      },
      {
        left: "2025\u5E74",
        right: "\u96F2\u6797\u92C1\u6A21\u677F\u7DAD\u4FEE\u4E00\u5EE0\u53CA\u7DAD\u4FEE\u4E8C\u5EE0"
      },
      {
        left: "2026\u5E74",
        right: "\u5168\u570B\u7B2C\u4E00\u5BB6\u63D0\u4F9B\u5BA2\u6236\u5B8C\u6574\u92C1\u6A21\u677F\u92B7\u552E\u3001\u79DF\u8CC3\u3001\u6E05\u4FEE\u3001\u6539\u88FD\u3001\u5009\u5132\u53CA\u5EAB\u5B58\u7BA1\u7406\u5168\u65B9\u4F4D\u670D\u52D9\u4E4B\u92C1\u6A21\u677F\u4F9B\u61C9\u5546"
      }
    ],
    style: {
      left: "text-right mb-20 text-gits-main text-h6-9-b",
      right: " text-p-9-r",
      outer: ""
    },
    ratio: { left: "1fr", right: "6fr" },
    line: { top: 1, width: 0.5 },
    dot: { size: 2.5, spacing: 4, top: 1, class: "rounded-full" },
    dotOffset: { x: 0.17, y: 4 }
  };
  return renderTemplate`${maybeRenderHead()}<div id="about"> <h1> <span class="text-h1-32-b">關於</span> <span class="text-h1-en-32-r text-gits-main">GITS</span> </h1> <h2 class="text-h2-en-12-r mb-12">Green Intelligent Total Solution</h2> ${renderComponent($$result, "TimeLine", $$TimeLine, { ...TimeLineData })} <div> <h3 class="text-h3-24-b my-12 text-gits-main">台灣聚特全國唯一</h3> <p class="text-p-9-r mb-12">
台灣聚特是業界唯一全程使用建築資訊模型（Building Information
            Modeling，簡稱BIM）的專業鋁模板供應商。
</p> <p class="text-p-9-r">
從業主及營造廠、鋁模板生產到安裝應用，全程皆以BIM檢討鋁模工程；不同於其他供應商只能於生產製造階段採用BIM作業，無法有效提高鋁模板的正確率及安裝工率。
</p> <div class="grid grid-cols-2 my-12 gap-x-14"> <div> <div class="bg-rect">業主及營造廠</div> <ul class="list-square"> <li>以BIM與業主進行設計檢討、清圖作業並澄清疑義</li> <li>以BIM與營造廠進行施工介面檢討並產出軀體施工圖</li> <li>產出鋁模板模型及結構體模型進行設計檢核</li> </ul> </div> <div> <div class="bg-rect">鋁模板生產及安裝應用</div> <ul class="list-square"> <li>以BIM進行鋁模板設計及生產製造</li> <li>產出組裝圖供現場安裝應用</li> </ul> </div> </div> </div> <div> <h2 class="text-h3-24-b my-16 text-gits-main">台灣聚特屢創佳績</h2> <div class="grid grid-cols-2 gap-x-16"> <div> <div class="text-h4-16-r"> <img class="inline-block h-full w-[4.8rem] -mt-3 text-gits-main"${addAttribute(crown.src, "src")} alt="crown">
銷售實績
</div> <ul class="list-building"> <li>新北林口二建案</li> <li>新北板橋SRC建案</li> <li>高雄楠梓建案</li> <li>新竹寶山建案</li> <li>新竹東區建案</li> <li>桃園大園二建案</li> <li>桃園龜山建案</li> <li>台北中正建案</li> </ul> </div> <div> <div class="text-h4-16-r"> <img${addAttribute(crown.src, "src")} class="inline-block h-full w-[4.8rem] -mt-3 text-gits-main" alt="crown">
工程實績
</div> <ul class="list-building"> <li>新北板橋建案</li> <li>桃園青埔建案</li> <li>桃園大園三建案</li> <li>新北三重建案</li> <li>新北中和SRC建案</li> <li>新北永和建案</li> <li>台北文山建案</li> <li>台北信義SRC建案</li> <li>新北鶯歌建案</li> </ul> </div> </div> </div> </div>`;
}, "/Users/purin/Documents/git/git/gits/src/components/Page/About.astro", void 0);

const video = "/twgits/_astro/twgits_3D.B7VCVXdJ.webm";

const videoThumbnail = new Proxy({"src":"/twgits/_astro/twgits_3D_thumbnail.DUchilPJ.webp","width":853,"height":480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/video/twgits_3D_thumbnail.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/video/twgits_3D_thumbnail.webp");
							return target[name];
						}
					});

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <link rel="preload"${addAttribute(videoThumbnail.src, "href")} fetchpriority="high"> <video class="min-h-160 tablet:min-h-175 w-full"${addAttribute(video, "src")} autoplay muted loop controls${addAttribute(videoThumbnail.src, "poster")}${spreadAttributes({ fetchpriority: "high" })}></video> </div>`;
}, "/Users/purin/Documents/git/git/gits/src/components/Global/Banner.astro", void 0);

const rubbishImage = new Proxy({"src":"/twgits/_astro/rubbish.TWSb57vM.png","width":408,"height":303,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/image/rubbish.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/image/rubbish.png");
							return target[name];
						}
					});

const treeImage = new Proxy({"src":"/twgits/_astro/tree.DcrDKQc4.png","width":408,"height":303,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/image/tree.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/image/tree.png");
							return target[name];
						}
					});

const dayiyuanImage = new Proxy({"src":"/twgits/_astro/dayiyuan.CKGwaAu5.png","width":408,"height":548,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/image/dayiyuan.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/image/dayiyuan.png");
							return target[name];
						}
					});

const $$Green = createComponent(($$result, $$props, $$slots) => {
  const timelineList = {
    ratio: { left: "minmax(0, 1fr)", right: "minmax(0, 1fr)" },
    line: { top: 4, width: 0.5 },
    dot: {
      size: 2.5,
      spacing: 4,
      top: 0,
      class: "rounded-full self-center"
    },
    dotOffset: { x: 0.17, y: 4 },
    items: [
      {
        left: `<img class='w-full' src='${rubbishImage.src}' alt='\u5783\u573E\u793A\u610F' />`,
        right: `<p class='text-h5-16-b'>\u7D2F\u7A4D\u6E1B\u5C11</p>
                    <p class='text-p-24-b'>102.4\u5678</p>
                    <p class='text-p-9-r text-gits-dark'>\u6BCF\u5E73\u65B9\u7C73\u6728\u6A21\u677F\u5C07\u7522\u751F10kg\u7684\u71DF\u5EFA\u5EE2\u68C4\u7269</p>`
      },
      {
        left: `<p class='text-h5-16-b mt-10'>\u7D2F\u7A4D\u62EF\u6551</p>
                    <p class='text-p-24-b'>30,797\u68F5</p>
                    <p class='text-p-9-r mb-10 text-gits-dark'>
                        \u63A1\u7528\u50B3\u7D71\u6728\u6A21\u677F\u5EFA\u7BC9\uFF0C\u6BCF1\u842C\u5E73\u65B9\u7C73\u65BD\u5DE5\u9762\u7A4D\u9700\u780D\u4F10245\u68F5\u6A39
                    </p>`,
        right: `<img class='w-full' src='${treeImage.src}' alt='\u68EE\u6797\u793A\u610F' />`
      },
      {
        left: `<img class='w-full' src='${dayiyuanImage.src}' alt='\u5927\u4E00\u5143\u8A08\u5283' />`,
        right: `<p class='text-h5-16-b'>\u7D2F\u7A4D\u6350\u6B3E</p>
                    <p class='text-p-24-b whitespace-nowrap overflow-visible'>$1,024,011</p>
                    <p class='text-p-9-r text-gits-dark'>
                        \u300C\u4E00\u584A\u9322\u4E0D\u591A\uFF0C\u5927\u4E00\u5143\u4E0D\u5C0F\u300D\u6240\u6709\u5BA2\u6236\u59D4\u8A17\u7684\u5DE5\u7A0B\uFF0C\u6BCF\u5E73\u65B9\u7C73\u6211\u5011\u90FD\u5C07\u6350\u8D08\u4E00\u5143\u4E88\u5404\u516C\u76CA\u5718\u9AD4\uFF0C\u6BCF\u4F4D\u5BA2\u6236\u7684\u652F\u6301\u662F\u53F0\u7063\u805A\u7279\u6301\u7E8C\u7CBE\u9032\u7684\u52D5\u529B\u3002
                    </p>`
      }
    ],
    style: {
      outer: "text-gits-main",
      left: "w-full m-auto",
      right: "w-full m-auto"
    }
  };
  return renderTemplate`${maybeRenderHead()}<div id="green"> <h1 class="text-h1-32-b">綠色永續</h1> <h2 class="text-h2-12-r mb-12">我們對環境保護及社會責任的貢獻</h2> ${renderComponent($$result, "TimeLine", $$TimeLine, { ...timelineList })} </div>`;
}, "/Users/purin/Documents/git/git/gits/src/components/Page/Green.astro", void 0);

const joinGitsImage = new Proxy({"src":"/twgits/_astro/joingits.C4FOb6Ff.png","width":411,"height":567,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/image/joingits.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/image/joingits.png");
							return target[name];
						}
					});

const $$JoinUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="join-us"> <h1 class="text-h1-32-b">加入聚特</h1> <h2 class="text-h2-12-r mb-12">一起打造智慧建築的未來</h2> <div> <h3 class="text-h3-24-b my-12 text-gits-main">福利制度</h3> <div class="relative grid tablet:grid-cols-2 grid-cols-1 gap-x-12"> <div class="mb-10"> <p class="text-indent--7 text-p-9-r">
薪資：保障年薪14個月+績效獎金。
</p> <p class="text-indent--7 text-p-9-r">
保險：團保、健保、勞保，新制勞工退休金。
</p> <p class="text-indent--7 text-p-9-r">
休假：勞基法基本休假、有薪生日假及有薪健康檢查假。
</p> <p class="text-indent--7 text-p-9-r">
福利：健康檢查、旅遊津貼、各項婚喪喜慶補助及不定期聚餐。
</p> </div> <div class="overflow-hidden aspect-4/3 w-full tablet:aspect-auto"> <img class="w-full"${addAttribute(joinGitsImage.src, "src")} alt="加入聚特示意圖"> </div> <div class="w-full my-5 tablet:my-0 tablet:w-[48%] bottom-0 block tablet:absolute"> <a href="https://www.104.com.tw/company/1a2x6bmb3j" target="_blank"> <p class="bg-rect px-12 py-8 my-12 tablet:my-0">
立即上104瞭解更多內容
</p> </a> </div> </div> </div> </div>`;
}, "/Users/purin/Documents/git/git/gits/src/components/Page/JoinUs.astro", void 0);

const contactImage = new Proxy({"src":"/twgits/_astro/logo_small.BlCBPP-h.png","width":190,"height":199,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/logo/logo_small.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/logo/logo_small.png");
							return target[name];
						}
					});

const lineIcon = new Proxy({"src":"/twgits/_astro/LINE.Bsu6ETUf.png","width":75,"height":75,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/icon/LINE.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/icon/LINE.png");
							return target[name];
						}
					});

const mailIcon = new Proxy({"src":"/twgits/_astro/mail.Czde838k.png","width":75,"height":75,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/icon/mail.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/icon/mail.png");
							return target[name];
						}
					});

const callIcon = new Proxy({"src":"/twgits/_astro/call.DLKcyVLJ.png","width":75,"height":75,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/icon/call.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/icon/call.png");
							return target[name];
						}
					});

const icon104 = new Proxy({"src":"/twgits/_astro/104.Ci0GR7gx.png","width":75,"height":75,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/purin/Documents/git/git/gits/src/assets/icon/104.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/purin/Documents/git/git/gits/src/assets/icon/104.png");
							return target[name];
						}
					});

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="contact"> <h1 class="text-h1-32-b">聯絡我們</h1> <h2 class="text-h2-12-r mb-12">鋁創家基首選聚特</h2> <div> <img class="w-48 mb-12"${addAttribute(contactImage.src, "src")} alt="聯絡我們"> <div class="my-12"> <a class="text-p-9-r block w-fit" href="mailto:service@twgits.com">郵箱：service@twgits.com</a> <a href="tel:(02)8522-1577" class="text-p-9-r block w-fit">
電話：(02)8522-1577
</a> <a href="tel:(02)8522-1587" class="text-p-9-r block w-fit">傳真：(02)8522-1587</a> <a class="text-p-9-r block w-fit" href="https://www.google.com/maps/place/GITS%E5%8F%B0%E7%81%A3%E8%81%9A%E7%89%B9%E8%88%88%E6%A5%AD/@25.0601582,121.4552695,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a9576a672baf:0xd7e8f1ed7b3280c1!8m2!3d25.0601582!4d121.4578444!16s%2Fg%2F11q9m86yqr?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">公司：新北市新莊區新北大道三段7號7樓之7</a> <p class="text-p-9-r text-indent--7">
工廠：雲林物流廠<br>雲科維修一廠<br>雲科維修二廠
</p> </div> <div class="min-h-[40px] h-18"> <a href="https://line.me/R/ti/p/@twgits" target="_blank"> <img class="h-full inline-block"${addAttribute(lineIcon.src, "src")} alt="line"> </a> <a href="mailto:service@twgits.com"> <img class="h-full inline-block mx-1"${addAttribute(mailIcon.src, "src")} alt="email"> </a> <a href="tel:(02)8522-1577"> <img class="h-full inline-block mx-1"${addAttribute(callIcon.src, "src")} alt="電話"> </a> <a href="https://www.104.com.tw/company/1a2x6bmb3j#info06" target="_blank"> <img class="h-full inline-block"${addAttribute(icon104.src, "src")} alt="104"> </a> </div> </div> </div>`;
}, "/Users/purin/Documents/git/git/gits/src/components/Page/Contact.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Banner", $$Banner, {})} ${maybeRenderHead()}<div class="outer"> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Green", $$Green, {})} ${renderComponent($$result2, "JoinUs", $$JoinUs, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </div> ` })}`;
}, "/Users/purin/Documents/git/git/gits/src/pages/index.astro", void 0);

const $$file = "/Users/purin/Documents/git/git/gits/src/pages/index.astro";
const $$url = "/twgits";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
