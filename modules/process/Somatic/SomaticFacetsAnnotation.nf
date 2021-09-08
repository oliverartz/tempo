process SomaticFacetsAnnotation {
  tag {idTumor + "__" + idNormal}

  publishDir "${params.outDir}/somatic/${outputPrefix}/combined_mutations/", mode: params.publishDirMode, pattern: "*.somatic.final.maf"

  input:
    tuple val(idTumor), val(idNormal), val(target), path(purity_rdata), path(purity_cncf), path(hisens_cncf), val(facetsPath), path(maf)
    val(tools)
    val(runSomatic)

  output:
    tuple val("placeHolder"), val(idTumor), val(idNormal), path("${outputPrefix}.somatic.final.maf"), emit: finalMaf4Aggregate
    path("file-size.txt"), emit: mafSize
    path("${outputPrefix}.somatic.final.maf"), emit: finalMafOutput
    tuple val(idTumor), val(idNormal), val(target), path("${outputPrefix}.somatic.final.maf"), emit: maf4MetaDataParser

  when: tools.containsAll(["facets", "mutect2", "manta", "strelka2"]) && runSomatic

  script:
  outputPrefix = "${idTumor}__${idNormal}"
  """
  if [ \$( cat ${maf} | wc -l ) -gt 1 ] ; then 
  Rscript --no-init-file /usr/bin/facets-suite/annotate-maf-wrapper.R \
    --facets-output ${purity_rdata} \
    --maf-file ${maf} \
    --facets-algorithm em \
    --output ${outputPrefix}.facets.maf

  Rscript --no-init-file /usr/bin/annotate-with-zygosity-somatic.R ${outputPrefix}.facets.maf ${outputPrefix}.facets.zygosity.maf

  echo -e "${outputPrefix}\t`wc -l ${outputPrefix}.facets.zygosity.maf | cut -d ' ' -f1`" > file-size.txt

  mv ${outputPrefix}.facets.zygosity.maf ${outputPrefix}.somatic.final.maf
  else
    cp ${maf} ${outputPrefix}.somatic.final.maf
    echo -e "${outputPrefix}\t0" > file-size.txt
  fi
  """
}