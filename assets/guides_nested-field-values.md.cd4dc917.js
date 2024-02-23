import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.989a1717.js";const A=JSON.parse('{"title":"Nested Field Values","description":"","frontmatter":{},"headers":[],"relativePath":"guides/nested-field-values.md","lastUpdated":1708649883000}'),o={name:"guides/nested-field-values.md"},p=l(`<h1 id="nested-field-values" tabindex="-1">Nested Field Values <a class="header-anchor" href="#nested-field-values" aria-label="Permalink to &quot;Nested Field Values&quot;">​</a></h1><blockquote><p>This section is still being written.</p></blockquote><p>Not all forms have a flat data structure. Some forms might expect you to have data <a href="/guides/html-forms.html">returned to the server</a> with a specific format.</p><p>Regardless of the reason, you&#39;re able to use a <code>dot.syntax</code> or a <code>brackets[&quot;syntax&quot;]</code> in your <code>Field</code>s in order to construct nested data:</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Form</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Field</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">houseform</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">onSubmit</span><span style="color:#89DDFF;">={(</span><span style="color:#A6ACCD;font-style:italic;">values</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">values</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">submit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Field</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test.other</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">initialValue</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Field</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">submit</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Submit</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>This form will submit with the following object:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">other</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="interpolate-nested-field-names" tabindex="-1">Interpolate Nested Field Names <a class="header-anchor" href="#interpolate-nested-field-names" aria-label="Permalink to &quot;Interpolate Nested Field Names&quot;">​</a></h2><p>You may also interpolate external values into your field names using the <code>brackets[&quot;syntax&quot;]</code>, like so:</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Form</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Field</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">houseform</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">someVal</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">other</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">onSubmit</span><span style="color:#89DDFF;">={(</span><span style="color:#A6ACCD;font-style:italic;">values</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">values</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">submit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Field</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">test[</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">someVal</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">initialValue</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Field</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">submit</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Submit</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>This will still submit with the value:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">other</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Keep in mind, if you change the name of the field programatically - it will wipe the value and treat it as a new field entirely. Think of it akin to React&#39;s <code>key</code> property in this regard.</p><p>If you&#39;re wanting to use a number to index a field value for arrays, <a href="/guides/arrays.html">please use the <code>FieldArray</code> helper instead</a>.</p></blockquote><h2 id="access-nested-fields-programatically" tabindex="-1">Access Nested Fields Programatically <a class="header-anchor" href="#access-nested-fields-programatically" aria-label="Permalink to &quot;Access Nested Fields Programatically&quot;">​</a></h2><p>If you&#39;re wanting to <a href="/guides/linked-fields.html">utilize <code>listenTo</code> and <code>getFieldValue</code> to create a linked input</a> with a nested field, you&#39;re able to mix-and-match the <code>dot.syntax</code> with the <code>brackets[&#39;syntax&#39;] </code> to reference the field, like so:</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Field</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">houseform</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Field</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">auth[&quot;confirmpassword&quot;]</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">listenTo</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">auth.password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">onChangeValidate</span><span style="color:#89DDFF;">={(</span><span style="color:#A6ACCD;font-style:italic;">val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">form</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Notice the \`auth.password\` field&#39;s name is using the bracket syntax</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFieldValue</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">auth.password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">// OR: if (val === form.getFieldValue(\`auth[&quot;password&quot;]\`)?.value) {</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Passwords must match</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Field</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Field</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">auth[&quot;password&quot;]</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#FFCB6B;">Field</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,16),e=[p];function t(c,r,F,D,y,i){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};