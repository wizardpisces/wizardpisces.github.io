import{_ as g,o as m,c as _,b as a,t as B,a as r}from"./index-0GEsk2u7.js";async function b(){if(!navigator.gpu)throw console.error("WebGPU not supported!"),new Error("WebGPU not supported!");const e=await navigator.gpu.requestAdapter();if(!e)throw console.error("Failed to get GPU adapter!"),new Error("Failed to get GPU adapter!");return{device:await e.requestDevice()}}async function h(e){const n=new Float32Array([1,2,3,4]),u=new Float32Array([5,6,7,8]),t=n.byteLength,o=e.createBuffer({size:t,usage:GPUBufferUsage.STORAGE,mappedAtCreation:!0});new Float32Array(o.getMappedRange()).set(n),o.unmap();const s=e.createBuffer({size:t,usage:GPUBufferUsage.STORAGE,mappedAtCreation:!0});new Float32Array(s.getMappedRange()).set(u),s.unmap();const i=e.createBuffer({size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC});return{gpuBufferA:o,gpuBufferB:s,gpuBufferResult:i}}async function y(e){const u=e.createShaderModule({code:`
        @group(0) @binding(0) var<storage, read> matrixA : array<f32>;
        @group(0) @binding(1) var<storage, read> matrixB : array<f32>;
        @group(0) @binding(2) var<storage, read_write> resultMatrix : array<f32>;

        @compute @workgroup_size(1)
        fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
            let index = GlobalInvocationID.x;
            let row = index / 2u;
            let col = index % 2u;

            var sum : f32 = 0.0;
            for (var i = 0u; i < 2u; i = i + 1u) {
                sum = sum + matrixA[row * 2u + i] * matrixB[i * 2u + col];
            }

            resultMatrix[index] = sum;
        }
    `});return e.createComputePipeline({layout:"auto",compute:{module:u,entryPoint:"main"}})}async function x(){const{device:e}=await b(),{gpuBufferA:n,gpuBufferB:u,gpuBufferResult:t}=await h(e),o=await y(e),s=e.createBindGroup({layout:o.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:u}},{binding:2,resource:{buffer:t}}]}),i=e.createCommandEncoder(),c=i.beginComputePass();c.setPipeline(o),c.setBindGroup(0,s),c.dispatchWorkgroups(4),c.end(),e.queue.submit([i.finish()]),await e.queue.onSubmittedWorkDone();const l=e.createBuffer({size:t.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),d=e.createCommandEncoder();d.copyBufferToBuffer(t,0,l,0,t.size),e.queue.submit([d.finish()]),await l.mapAsync(GPUMapMode.READ);const p=l.getMappedRange(),f=new Float32Array(p.slice(0));return l.unmap(),f}const A={async setup(e){return{result:await x().catch(console.error)}}},w={id:"webgpu"},G=r("h1",null,"matrix multiply",-1),P=r("h2",null,"input:",-1),U=r("br",null,null,-1),v=r("br",null,null,-1),E=r("br",null,null,-1),C=r("br",null,null,-1),R=r("br",null,null,-1),M=r("br",null,null,-1),S=r("br",null,null,-1),z=r("h2",null,"output:",-1);function D(e,n,u,t,o,s){return m(),_("div",w,[G,P,U,a(" matrixA"),v,a("[ 1, 2, "),E,a(" 3, 4 ]; "),C,a(" matrixB "),R,a("[ 5, 6, "),M,a(" 7, 8 ]; "),S,z,a(" matrixA * matrixB = ["+B(t.result)+"] ",1)])}const T=g(A,[["render",D]]);export{T as default};
