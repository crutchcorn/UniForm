import{_ as s,c as e,o as a,a as n}from"./app.af9f7b1e.js";const A=JSON.parse('{"title":"Array Field Item","description":"","frontmatter":{},"headers":[{"level":2,"title":"Array Field Item Props","slug":"array-field-item-props","link":"#array-field-item-props","children":[]}],"relativePath":"reference/array-item.md","lastUpdated":1676883814000}'),o={name:"reference/array-item.md"},l=n(`<h1 id="array-field-item" tabindex="-1">Array Field Item <a class="header-anchor" href="#array-field-item" aria-hidden="true">#</a></h1><p>An <code>ArrayFieldItem</code> is a helper used to validate sub-items in a <code>FieldArray</code>. An example <code>ArrayFieldItem</code> usage is:</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">FieldArray</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">people</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">initialValue</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">person</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">FieldArrayItem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">people[</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">].name</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">people[</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">].name</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">setValue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">onBlur</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#C792EA;">onBlur</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">onBlur</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#C792EA;">onChange</span><span style="color:#89DDFF;">={(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setValue</span><span style="color:#A6ACCD;">(e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value)</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">            /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          )</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">FieldArrayItem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ))</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">FieldArray</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="array-field-item-props" tabindex="-1">Array Field Item Props <a class="header-anchor" href="#array-field-item-props" aria-hidden="true">#</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>string</code></td><td>The name of the field in the form.</td></tr><tr><td><code>listenTo</code></td><td><code>string[]</code></td><td>A list of form field names to listen to. When a listened field updates it&#39;s value, it will trigger the relevant <code>onChangeValidation</code> change detection. Useful when making one field depend on the validation of another.</td></tr><tr><td><code>children</code></td><td><code>(props: FieldInstance&lt;T&gt;) =&gt; JSX.Element</code></td><td>Passed <a href="/reference/field.html#interface-fieldinstance"><code>FieldInstance</code></a>, expected to return a JSX element.</td></tr><tr><td><code>onChangeValidate</code></td><td><code>() =&gt; Promise&lt;boolean&gt;</code> or <a href="https://github.com/colinhacks/zod" target="_blank" rel="noreferrer"><code>ZodType</code></a></td><td>The validation logic for when the user has changed the field value. Either a Zod type or Promise. If resolved, no error is passed. If rejected, rejection string is set as an error.</td></tr><tr><td><code>onBlurValidate</code></td><td><code>() =&gt; Promise&lt;boolean&gt;</code> or <a href="https://github.com/colinhacks/zod" target="_blank" rel="noreferrer"><code>ZodType</code></a></td><td>The validation logic for when the user has blurred the field. Either a Zod type or Promise. If resolved, no error is passed. If rejected, rejection string is set as an error.</td></tr><tr><td><code>onMountValidate</code></td><td><code>() =&gt; Promise&lt;boolean&gt;</code> or <a href="https://github.com/colinhacks/zod" target="_blank" rel="noreferrer"><code>ZodType</code></a></td><td>The validation logic for when the component is mounted . Either a Zod type or Promise. If resolved, no error is passed. If rejected, rejection string is set as an error.</td></tr><tr><td><code>onSubmitValidate</code></td><td><code>() =&gt; Promise&lt;boolean&gt;</code> or <a href="https://github.com/colinhacks/zod" target="_blank" rel="noreferrer"><code>ZodType</code></a></td><td>The validation logic for when the user has submitted the form. Either a Zod type or Promise. If resolved, no error is passed. If rejected, rejection string is set as an error.</td></tr></tbody></table>`,5),t=[l];function p(r,c,d,i,D,y){return a(),e("div",null,t)}const C=s(o,[["render",p]]);export{A as __pageData,C as default};
