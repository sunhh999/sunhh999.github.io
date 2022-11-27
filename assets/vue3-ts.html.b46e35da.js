import{_ as n,o as s,c as e,a}from"./app.7ff1f6ec.js";const i={},l=a(`<h1 id="ts" tabindex="-1"><a class="header-anchor" href="#ts" aria-hidden="true">#</a> TS</h1><ul><li>declare namespace API \u540C\u6587\u4EF6\u53EA\u80FD\u6709\u4E00\u4E2A \u5982\u679C\u6709\u591A\u4E2A \u90A3\u4E48\u5C31\u4F1A\u90FD\u5931\u6548</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>declare namespace API {
    type Login = {
        username: string
        password: string
        regSys: string | number
        uuid: string
        imageCode: string
    }

    type StringOrNumber = string | number | null
    type StringOrNull = string | null
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>reactive \u58F0\u660E\u7684\u6570\u636E\u5BF9\u8C61\u5FEB\u901F\u58F0\u660E <ul><li>\u7C7B\u578B\u65AD\u8A00</li></ul></li></ul><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token comment">/* searchForm start */</span>
<span class="token comment">// ts\u58F0\u660E</span>
<span class="token keyword">interface</span> <span class="token class-name">searchTypes</span> <span class="token punctuation">{</span>
    onchannel<span class="token operator">:</span> <span class="token builtin">string</span>
    status<span class="token operator">:</span> <span class="token builtin">string</span>
    onpage<span class="token operator">:</span> <span class="token builtin">string</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    createUser<span class="token operator">:</span> <span class="token builtin">string</span>
    creationTime<span class="token operator">:</span> RangeValue
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u5FEB\u901F\u58F0\u660E</span>
<span class="token keyword">const</span> searchFrom <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> searchTypes<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528 \u7C7B\u578B\u65AD\u8A00\u7684\u65F6\u5019 \u51FA\u73B0\u7684\u95EE\u9898</li></ul><img src="https://typora-images-warehouse.oss-cn-beijing.aliyuncs.com/image-20221103180043466-20221128001349392.png" alt="image-20221103180043466" style="zoom:50%;"><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    form: {} as DetailFormType,    
    
    export type DateType = undefined | Dayjs  // \u53C2\u6570\u58F0\u660E\u7684\u524D\u540E\u4F1A\u5F71\u54CD\u9ED8\u8BA4\u503C
    
    DetailFormType {
   	 pushTime :DateType
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>reactive \u58F0\u660E\u7684\u6570\u636E\u5BF9\u8C61\u5FEB\u901F\u58F0\u660E <ul><li>\u7C7B\u578B\u65AD\u8A00</li></ul></li></ul><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token comment">/* searchForm start */</span>
<span class="token comment">// ts\u58F0\u660E</span>
<span class="token keyword">interface</span> <span class="token class-name">searchTypes</span> <span class="token punctuation">{</span>
    onchannel<span class="token operator">:</span> <span class="token builtin">string</span>
    status<span class="token operator">:</span> <span class="token builtin">string</span>
    onpage<span class="token operator">:</span> <span class="token builtin">string</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    createUser<span class="token operator">:</span> <span class="token builtin">string</span>
    creationTime<span class="token operator">:</span> RangeValue
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u5FEB\u901F\u58F0\u660E</span>
<span class="token keyword">const</span> searchFrom <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> searchTypes<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528 \u7C7B\u578B\u65AD\u8A00\u7684\u65F6\u5019 \u51FA\u73B0\u7684\u95EE\u9898</li></ul><img src="https://typora-images-warehouse.oss-cn-beijing.aliyuncs.com/image-20221103180043466-20221128001349392.png" alt="image-20221103180043466" style="zoom:50%;"><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    form: {} as DetailFormType,    
    
    export type DateType = undefined | Dayjs  // \u53C2\u6570\u58F0\u660E\u7684\u524D\u540E\u4F1A\u5F71\u54CD\u9ED8\u8BA4\u503C
    
    DetailFormType {
   	 pushTime :DateType
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),t=[l];function c(r,d){return s(),e("div",null,t)}var o=n(i,[["render",c],["__file","vue3-ts.html.vue"]]);export{o as default};
