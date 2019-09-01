(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{202:function(e,o,t){"use strict";t.r(o);var r=t(0),s=Object(r.a)({},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("h2",{attrs:{id:"the-nextflow-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-nextflow-process","aria-hidden":"true"}},[e._v("#")]),e._v(" The Nextflow Process")]),e._v(" "),t("p",[e._v("You can follow the Nextflow process by following what is printed to "),t("code",[e._v("stdout")]),e._v(". Additionally, the Nextflow Java process creates a "),t("code",[e._v(".nextflow.log")]),e._v(" file in the run directory where warnings and errors are logged.")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("ul",[t("li",[e._v("The last executed Nextflow call in the run directory will be in the first few lines of "),t("code",[e._v(".nextflow.log")]),e._v(".")]),e._v(" "),t("li",[e._v("Repeated calls to "),t("code",[e._v("nextflow run")]),e._v(" in the same directory renames older output files from the Nextflow process, for example "),t("code",[e._v(".nextflow.log.3")]),e._v(" is from three runs prior to the current one.")])])]),e._v(" "),t("h2",{attrs:{id:"individual-jobs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#individual-jobs","aria-hidden":"true"}},[e._v("#")]),e._v(" Individual Jobs")]),e._v(" "),t("p",[e._v("A job running a single process inside the pipeline can fail due to inadequate resources, which will trigger a re-run with increased resources. For other failures, you need to look inside the "),t("code",[e._v("work")]),e._v(" directory. In the "),t("code",[e._v(".html")]),e._v(" reports generated by default (or the "),t("code",[e._v("trace.txt")]),e._v(" file) in the run directory you will find for each process run its status ("),t("code",[e._v("COMPLETED")]),e._v("; "),t("code",[e._v("CACHED")]),e._v(" if resumed and completed in a prior run; and "),t("code",[e._v("FAILED")]),e._v(" if an error occured) and a "),t("code",[e._v("hash")]),e._v(". The hash indicates the subdirectory in which the process was run (for example "),t("code",[e._v("a4/00365e")]),e._v(" points to "),t("code",[e._v("work/a4/00365e9190eca55907746edeb58f77")]),e._v("). In this directory you find the following files which are useful for troubleshooting:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v(".command.run")]),e._v(": This is the actual script which sets environment variables and runs "),t("code",[e._v(".command.sh")]),e._v(", Nextflow submits this to LSF using bsub. You can manually resubmit it by running "),t("code",[e._v("bsub < .command.run")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v(".command.sh")]),e._v(": This contains the command-line calls that are defined in the corresponding process in "),t("code",[e._v("pipeline.nf")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v(".command.log")]),e._v(": Contains "),t("code",[e._v("stdout")]),e._v(" from the process itself and "),t("code",[e._v("bsub")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v(".command.out")]),e._v(": "),t("code",[e._v("stdout")]),e._v(" from the process.")]),e._v(" "),t("li",[t("code",[e._v(".command.err")]),e._v(": "),t("code",[e._v("stderr")]),e._v(" from the process.")])]),e._v(" "),t("p",[e._v("Additionally, any files used by the process are symlinked in the work directory, and any intermediate and final output files are also left here.")])])},[],!1,null,null,null);o.default=s.exports}}]);