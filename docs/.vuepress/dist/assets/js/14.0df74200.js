(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{198:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),a("p",[e._v("All paths below are relative to the base directory "),a("code",[e._v("outDir")]),e._v(" as described in the "),a("router-link",{attrs:{to:"/running-the-pipeline.html"}},[e._v("run instructions")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("outDir\n├── bams\n├── qc\n├── somatic\n└── germline\n")])])]),a("h2",{attrs:{id:"bam-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bam-files","aria-hidden":"true"}},[e._v("#")]),e._v(" BAM Files")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("bams")]),e._v(" folder contains the final aligned and post-processed BAM files along with index files.")]),e._v(" "),a("h2",{attrs:{id:"qc-outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qc-outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" QC Outputs")]),e._v(" "),a("p",[e._v("FASTQ file, read alignment and basic BAM file QC is in the "),a("code",[e._v("qc")]),e._v(" directory:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("qc\n├── alfred\n├── collecthsmetrics\n├── conpair\n├── fastp\n└── alignment_qc.txt\n")])])]),a("p",[e._v("These outputs are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("fastp")]),e._v(" (folder): An HTML report for each FASTQ file pair per sample.")]),e._v(" "),a("li",[a("code",[e._v("alfred")]),e._v(" (folder): A per-sample and per-readgroup BAM file alignment metrics in text and PDF files.")]),e._v(" "),a("li",[a("code",[e._v("collectshsmetrics")]),e._v(" (folder): For exomes, per-sample hybridisation-selection metrics in the.")]),e._v(" "),a("li",[a("code",[e._v("conpair")]),e._v(" (folder): Per tumor-normal-pair contamination and sample concordance estimates.")]),e._v(" "),a("li",[a("code",[e._v("alignment_qc.txt")]),e._v(": Aggregated read-alignments statistics file, from the "),a("code",[e._v("alfred")]),e._v(" and "),a("code",[e._v("collectshsmetrics")]),e._v(" folders.")])]),e._v(" "),a("h2",{attrs:{id:"somatic-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#somatic-data","aria-hidden":"true"}},[e._v("#")]),e._v(" Somatic data")]),e._v(" "),a("p",[e._v("The result of the somatic analyses is output in summarized forms in the "),a("code",[e._v("somatic")]),e._v(" folder:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("somatic\n├── cna\n├── mut_somatic.maf\n├── mut_somatic_neoantigens.txt\n├── cna_armlevel.txt\n├── cna_genelevel.txt\n├── cna_hisens.seg\n├── cna_purity.seg\n├── cna_facets_run_info.txt\n├── sv_somatic.vcf.gz\n└── sample_metadata.txt \n")])])]),a("p",[e._v("These outputs are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("facets")]),e._v(" (folder): Individual copy-number profiles from FACETS, per tumor-normal pair.")]),e._v(" "),a("li",[a("code",[e._v("mut_somatic.maf")]),e._v(": Filtered mutations from MuTect2 and Strelka2, annotated with mutational effects, neoantigen predictions, and zygosity, as "),a("router-link",{attrs:{to:"/variant-annotation-and-filtering.html#somatic-snvs-and-indels"}},[e._v("described elsewhere")]),e._v(".")],1),e._v(" "),a("li",[a("code",[e._v("mut_somatic_neoantigens.txt")]),e._v(": Neoantigen predictions from NetMHCpan for all samples.")]),e._v(" "),a("li",[a("code",[e._v("cna_armlevel.txt")]),e._v(", "),a("code",[e._v("cna_genelevel.txt")]),e._v(", and "),a("code",[e._v("cna_hisens.seg")]),e._v(", "),a("code",[e._v("cna_purity.seg")]),e._v(", and "),a("code",[e._v("cna_facets_run_info.txt")]),e._v(", summarized arm- and gene-level output from Facets, as well as IGV-style segmentation files and Facets run information.")]),e._v(" "),a("li",[a("code",[e._v("sv_somatic.vcf.gz")]),e._v(": All structural variants detected by Delly and Manta.")]),e._v(" "),a("li",[a("code",[e._v("merged_metadata.txt")]),e._v(": Merged metadata across samples and analyses.")])]),e._v(" "),a("h2",{attrs:{id:"germline-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#germline-data","aria-hidden":"true"}},[e._v("#")]),e._v(" Germline data")]),e._v(" "),a("p",[e._v("The result of the germline analyses is output in summarized forms in the "),a("code",[e._v("germline")]),e._v(" folder:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("germline/\n├── mut_germline.maf\n└── sv_germline.vcf.gz\n")])])]),a("p",[e._v("These outputs are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("mut_germline.maf")]),e._v(": Filtered mutations from HaplotypeCaller and Strelka2, annotated with mutational effects and zygosity, as "),a("router-link",{attrs:{to:"/variant-annotation-and-filtering.html#germline-snvs-and-indels"}},[e._v("described elsewhere")]),e._v(".")],1),e._v(" "),a("li",[a("code",[e._v("sv_germline.vcf.gz")]),e._v(": All structural variants Delly and Manta.")])]),e._v(" "),a("h2",{attrs:{id:"extended-outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" Extended Outputs")]),e._v(" "),a("p",[e._v("When run with the flag "),a("code",[e._v("--publishAll")]),e._v(", the pipeline will output additional intermediate data from select processes. These are:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("somatic\n├── mutations\n    └── mutect2\n    └── strelka2\n├── structural_variants\n    └── delly\n    └── manta    \n├── facets\n└── lohhla\n\ngermline\n├── mutations\n    └── haplotypecaller\n    └── strelka2\n└── structural_variants\n    └── delly\n    └── manta\n")])])]),a("p",[e._v("The "),a("code",[e._v("mutations")]),e._v(" subdirectory contain VCFs with the unfiltered variant calls from the somatic and germline SNV/indel and SV callers. Additionally, these directories contain per-sample unfiltered MAF files generated in the "),a("code",[e._v("SomaticAnnotateMaf")]),e._v(" and "),a("code",[e._v("GermlineAnnotateMaf")]),e._v(" process, respectively. The "),a("code",[e._v("facets")]),e._v(" subdirectory will contain the full arm- and gene-level outputs per sample. In the "),a("code",[e._v("lohhla")]),e._v(" subdirectory the full LOHHLA LOH output metrics will be together with a PDF file with graphical output.")])])},[],!1,null,null,null);t.default=n.exports}}]);