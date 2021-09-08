initSidebarItems({"constant":[["COPY_BUFFER_ALIGNMENT","Buffer to buffer copy as well as buffer clear offsets and sizes must be aligned to this number."],["COPY_BYTES_PER_ROW_ALIGNMENT","Buffer-Texture copies must have `bytes_per_row` aligned to this number."],["MAP_ALIGNMENT","Size to align mappings."],["PUSH_CONSTANT_ALIGNMENT","Alignment all push constants need"],["QUERY_RESOLVE_BUFFER_ALIGNMENT","An offset into the query resolve buffer has to be aligned to this."],["QUERY_SET_MAX_QUERIES","Maximum queries in a query set"],["QUERY_SIZE","Size of a single piece of query data."],["VERTEX_STRIDE_ALIGNMENT","Vertex buffer strides have to be aligned to this number."]],"enum":[["AddressMode","How edges should be handled in texture addressing."],["Backend","Backends supported by wgpu."],["BindingType","Specific type of a binding."],["BlendFactor","Alpha blend factor."],["BlendOperation","Alpha blend operation."],["BufferBindingType","Specific type of a buffer binding."],["CompareFunction","Comparison function used for depth and stencil operations."],["DeviceType","Supported physical device types."],["Face","Face of a vertex."],["FilterMode","Texel mixing mode when sampling between texels."],["FrontFace","Winding order which classifies the “front” face."],["IndexFormat","Format of indices used with pipeline."],["PolygonMode","Type of drawing mode for polygons"],["PowerPreference","Power Preference when choosing a physical adapter."],["PresentMode","Behavior of the presentation engine based on frame rate."],["PrimitiveTopology","Primitive type the input mesh is composed of."],["QueryType","Type of query contained in a QuerySet."],["SamplerBorderColor","Color variation to use when sampler addressing mode is [`AddressMode::ClampToBorder`]"],["ShaderModel","Collections of shader features a device supports if they support less than WebGPU normally allows."],["StencilOperation","Operation to perform on the stencil value."],["StorageTextureAccess","Specific type of a sample in a texture binding."],["SurfaceStatus","Status of the recieved surface image."],["TextureAspect","Kind of data the texture holds."],["TextureDimension","Dimensionality of a texture."],["TextureFormat","Underlying texture data format."],["TextureSampleType","Specific type of a sample in a texture binding."],["TextureViewDimension","Dimensions of a particular texture view."],["VertexFormat","Vertex Format for a Vertex Attribute (input)."],["VertexStepMode","Rate that determines when vertex data is advanced."]],"struct":[["AdapterInfo","Information about an adapter."],["Backends","Represents the backends that wgpu will use."],["BindGroupLayoutEntry","Describes a single binding inside a bind group."],["BlendComponent","Describes the blend component of a pipeline."],["BlendState","Describe the blend state of a render pipeline."],["BufferDescriptor","Describes a [`Buffer`]."],["BufferUsages","Different ways that you can use a buffer."],["Color","RGBA double precision color."],["ColorTargetState","Describes the color state of a render pipeline."],["ColorWrites","Color write mask. Disabled color channels will not be written to."],["CommandBufferDescriptor","Describes a [`CommandBuffer`]."],["CommandEncoderDescriptor","Describes a [`CommandEncoder`]."],["DepthBiasState","Describes the biasing setting for the depth target."],["DepthStencilState","Describes the depth/stencil state in a render pipeline."],["DeviceDescriptor","Describes a [`Device`]."],["DispatchIndirectArgs","Argument buffer layout for dispatch_indirect commands."],["DownlevelCapabilities","Lists various ways the underlying platform does not conform to the WebGPU standard."],["DownlevelFlags","Binary flags listing features that may or may not be present on downlevel adapters."],["DownlevelLimits","Represents the sets of additional limits on an adapter, which take place when running on downlevel backends."],["DrawIndexedIndirectArgs","Argument buffer layout for draw_indexed_indirect commands."],["DrawIndirectArgs","Argument buffer layout for draw_indirect commands."],["Extent3d","Extent of a texture related operation."],["Features","Features that are not guaranteed to be supported."],["ImageCopyBuffer","View of a buffer which can be used to copy to/from a texture."],["ImageCopyTexture","View of a texture which can be used to copy to/from a buffer/texture."],["ImageDataLayout","Layout of a texture in a buffer’s memory."],["ImageSubresourceRange","Subresource range within an image"],["Limits","Represents the sets of limits an adapter/device supports."],["MultisampleState","Describes the multi-sampling state of a render pipeline."],["Origin3d","Origin of a copy to/from a texture."],["PipelineStatisticsTypes","Flags for which pipeline data should be recorded."],["PrimitiveState","Describes the state of primitive assembly and rasterization in a render pipeline."],["PushConstantRange","A range of push constant memory to pass to a shader stage."],["QuerySetDescriptor","Describes how to create a QuerySet."],["RenderBundleDepthStencil","Describes the depth/stencil attachment for render bundles."],["RenderBundleDescriptor","Describes a [`RenderBundle`]."],["RequestAdapterOptions","Options for requesting adapter."],["ShaderStages","Describes the shader stages that a binding will be visible from."],["StencilFaceState","Describes stencil state in a render pipeline."],["StencilState","State of the stencil operation (fixed-pipeline stage)."],["SurfaceConfiguration","Configures a [`Surface`] for presentation."],["TextureDescriptor","Describes a [`Texture`]."],["TextureFormatFeatureFlags","Feature flags for a texture format."],["TextureFormatFeatures","Features supported by a given texture format"],["TextureFormatInfo","Information about a texture format."],["TextureUsages","Different ways that you can use a texture."],["VertexAttribute","Vertex inputs (attributes) to shaders."]],"type":[["BufferAddress","Integral type used for buffer offsets."],["BufferSize","Integral type used for buffer slice sizes."],["DynamicOffset","Integral type used for dynamic bind group offsets."],["ShaderLocation","Integral type used for binding locations in shaders."]]});