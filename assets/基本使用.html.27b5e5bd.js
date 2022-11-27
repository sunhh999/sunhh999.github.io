import{_ as n,o as s,c as a,a as e}from"./app.7ff1f6ec.js";const i={},l=e(`<h1 id="git-\u65E5\u5E38\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#git-\u65E5\u5E38\u4F7F\u7528" aria-hidden="true">#</a> Git \u65E5\u5E38\u4F7F\u7528</h1><h2 id="\u521D\u6B21\u4F7F\u7528-git" tabindex="-1"><a class="header-anchor" href="#\u521D\u6B21\u4F7F\u7528-git" aria-hidden="true">#</a> \u521D\u6B21\u4F7F\u7528 git</h2><ul><li>\u914D\u7F6E\u7528\u6237\u4FE1\u606F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6E\u7528\u6237\u540D\uFF1A</span>
<span class="token function">git</span> config --global user.name <span class="token string">&quot;your name&quot;</span>

<span class="token comment"># \u914D\u7F6E\u7528\u6237\u90AE\u7BB1</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;youremail@github.com&quot;</span>

<span class="token comment"># \u914D\u7F6E\u7528\u6237\u5BC6\u7801</span>
<span class="token function">git</span> config --global user.password your password

<span class="token comment"># \u67E5\u770Bgit\u914D\u7F6E\u4FE1\u606F</span>
$ <span class="token function">git</span> config --list

<span class="token comment"># \u6CE8</span>
<span class="token comment"># \u5982\u679C\u8BBE\u7F6E\u7684\u4FE1\u606F\u60F3\u8981\u4FEE\u6539 \u90A3\u4E48\u4ECE\u65B0\u914D\u7F6E\u4E00\u6B21\u5C31\u597D\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shh-\u5BC6\u94A5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#shh-\u5BC6\u94A5\u914D\u7F6E" aria-hidden="true">#</a> shh \u5BC6\u94A5\u914D\u7F6E</h2><blockquote><p>\u8BB0\u5F55\u672C\u5730\u5982\u4F55\u751F\u4EA7\u5BC6\u94A5\u548C\u83B7\u53D6</p><p>github, gitlab\uFF0Cgitee \u8FD9\u79CD\u5BC6\u94A5\u653E\u7F6E\u5927\u540C\u5C0F\u5F02 \u8FD9\u91CC\u5C31\u4E0D\u8BB0\u5F55</p></blockquote><h3 id="\u6CA1\u6709-ssh-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#\u6CA1\u6709-ssh-\u5BC6\u94A5" aria-hidden="true">#</a> \u6CA1\u6709 SSH \u5BC6\u94A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C\u8FDB\u4E0D\u53BB \u5C31\u4EE3\u8868\u6CA1\u6709</span>
<span class="token builtin class-name">cd</span> ~/.ssh

<span class="token comment"># \u751F\u6210 ssh \u5BC6\u94A5</span>
ssh-keygen -t rsa -C <span class="token string">&quot;your_email@example.com&quot;</span>

<span class="token comment"># \u5C55\u5F00\u6240\u6709\u5305\u62EC\u9690\u85CF\u7684\u6587\u4EF6</span>
<span class="token function">ls</span> -a

<span class="token comment"># \u8FDB\u5165\u5BC6\u94A5\u6587\u4EF6</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6709-shh-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#\u6709-shh-\u5BC6\u94A5" aria-hidden="true">#</a> \u6709 shh \u5BC6\u94A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165</span>
<span class="token builtin class-name">cd</span> ~/.ssh

<span class="token comment"># \u5C55\u5F00</span>
<span class="token function">ls</span> -a

<span class="token comment"># \u8FDB\u5165\u5BC6\u94A5\u6587\u4EF6</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[l];function d(t,r){return s(),a("div",null,c)}var u=n(i,[["render",d],["__file","\u57FA\u672C\u4F7F\u7528.html.vue"]]);export{u as default};
