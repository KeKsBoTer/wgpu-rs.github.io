(function() {var type_impls = {
"wgpu_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#95-119\">source</a><a href=\"#impl-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#99-101\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"wgpu_core/id/struct.Id.html#tymethod.from_raw\" class=\"fn\">from_raw</a>(raw: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/nonzero/struct.NonZeroU64.html\" title=\"struct core::num::nonzero::NonZeroU64\">NonZeroU64</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><h5 id=\"safety\"><a href=\"#safety\">Safety</a></h5>\n<p>The raw id must be valid for the type.</p>\n</div></details><section id=\"method.backend\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#108-118\">source</a><h4 class=\"code-header\">pub fn <a href=\"wgpu_core/id/struct.Id.html#tymethod.backend\" class=\"fn\">backend</a>(self) -&gt; Backend</h4></section></div></details>",0,"wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#147-151\">source</a><a href=\"#impl-PartialEq-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#148-150\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#161-165\">source</a><a href=\"#impl-Ord-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#162-164\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#826-828\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#846-848\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#871-874\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</span></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#123-127\">source</a><a href=\"#impl-Clone-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#124-126\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#58\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.192/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#58\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.192/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.192/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.192/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.192/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#129-139\">source</a><a href=\"#impl-Debug-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#130-138\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, formatter: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#155-159\">source</a><a href=\"#impl-PartialOrd-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#156-158\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1122\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1139\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1155\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1172\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<section id=\"impl-Copy-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#121\">source</a><a href=\"#impl-Copy-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section>","Copy","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#63\">source</a><a href=\"#impl-Serialize-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.192/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#63\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.192/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.192/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.192/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.192/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.192/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<section id=\"impl-Eq-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#153\">source</a><a href=\"#impl-Eq-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section>","Eq","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypedId-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#187-208\">source</a><a href=\"#impl-TypedId-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"wgpu_core/id/trait.TypedId.html\" title=\"trait wgpu_core::id::TypedId\">TypedId</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.zip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#188-195\">source</a><a href=\"#method.zip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"wgpu_core/id/trait.TypedId.html#tymethod.zip\" class=\"fn\">zip</a>(index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, epoch: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, backend: Backend) -&gt; Self</h4></section><section id=\"method.unzip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#197-203\">source</a><a href=\"#method.unzip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"wgpu_core/id/trait.TypedId.html#tymethod.unzip\" class=\"fn\">unzip</a>(self) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, Backend)</h4></section><section id=\"method.into_raw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#205-207\">source</a><a href=\"#method.into_raw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"wgpu_core/id/trait.TypedId.html#tymethod.into_raw\" class=\"fn\">into_raw</a>(self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/nonzero/struct.NonZeroU64.html\" title=\"struct core::num::nonzero::NonZeroU64\">NonZeroU64</a></h4></section></div></details>","TypedId","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Id%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#141-145\">source</a><a href=\"#impl-Hash-for-Id%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/id.rs.html#142-144\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","wgpu_core::id::AdapterId","wgpu_core::id::SurfaceId","wgpu_core::id::DeviceId","wgpu_core::id::BufferId","wgpu_core::id::StagingBufferId","wgpu_core::id::TextureViewId","wgpu_core::id::TextureId","wgpu_core::id::SamplerId","wgpu_core::id::BindGroupLayoutId","wgpu_core::id::PipelineLayoutId","wgpu_core::id::BindGroupId","wgpu_core::id::ShaderModuleId","wgpu_core::id::RenderPipelineId","wgpu_core::id::ComputePipelineId","wgpu_core::id::CommandBufferId","wgpu_core::id::RenderBundleId","wgpu_core::id::QuerySetId"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()