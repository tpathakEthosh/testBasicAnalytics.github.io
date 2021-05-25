var dataList={
	ngsLabImage:"images/NGS_Virtual_Lab.svg",
	
	/************************************ Persona lab ***************************************/
	personaList :{
		1:{
			personaName:"Pathologist",
			personaIcon:"images/Pathologist_icon.png",
			bgColor:"#84BD00",
			personaBand:"images/band_green.png",
			personaDescription:"I work at a cancer diagnostics lab, where I process clinical samples that come from a patient’s malignancy (solid tumor or blood sample). I work with oncologists and help them diagnose the specific cancer subtype and choose the right treatments.",
			workflowList:{
				1:{
					workflowName : "Sample Quality Control (QC)",
					labImg:"images/Sample_QC_lab.svg",
					valueProposition:"Sample quality control throughout the library preparation process helps ensure reproducible data by identifying samples that are of insufficient quality and/or quantity to yield reliable sequence data. Sample QC helps ensure that your pathology findings are accurate, not artifacts, to give your customers the data quality they need to make the best decisions.",
                    agilentOfferings:"The Agilent automated electrophoresis portfolio offers several instruments for QC analysis of nucleic acids, including the Agilent 2100 Bioanalyzer system, Agilent Fragment Analyzer systems, Agilent TapeStation systems, and the Agilent Femto Pulse system.",
					instrumentList :[
							{
								intrumentHotspotName:"Agilent Bioanalyzer System",
								instrumentTitle:'Agilent Bioanalyzer System',
								instrumentImg:'images/Bioanalyzer_system.png',
								instrumentInfo:"The Agilent 2100 Bioanalyzer system is an established automated electrophoresis solution for the sample quality control of biomolecules. The system integrates an instrument, data processing software, reagents, and a microfluidic chip specific for DNA, RNA, or protein analysis. It is suitable for <br>next-generation sequencing (NGS), gene expression, biopharmaceutical, and genome editing workflows, delivering highly precise analytical evaluation of various sample types. Advantages of microfluidics-based automated electrophoresis over traditional gel electrophoresis include dramatically reduced sample (1 µL for nucleic acids, 4 µL for proteins) and reagent consumption, significantly faster analysis time, and less hands-on activities during sample preparation and data analysis. The Agilent 2100 Bioanalyzer system is ideal for the scientist requiring a versatile instrument for nucleic acids and protein electrophoresis analysis with moderately low throughput <br>(10-12 samples) needs.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Replaceable electrode cartridges that can be easily exchanged for contamination-free switching between methods</li><li>The system features minimum exposure to hazardous materials to ensure operator safety</li><li> The 2100 Bioanalyzer instrument is compliant with European RoHS directives</li><li> For GLP/GMP environments, the 2100 Bioanalyzer system offers IQ and OQ services, as well as features to enable 21 Cf Part 11 compliance</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_DNA_kits.png"></div><div class="txtContainer">Bioanalyzer DNA kits provide microfluidic chips, reagents, and consumables needed to run DNA sample assays with your Agilent 2100 Bioanalyzer instrument.</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_RNA_kits.png"></div><div class="txtContainer">Bioanalyzer RNA kits provide microfluidic chips, reagents, and consumables needed to run RNA sample assays with your Agilent 2100 Bioanalyzer instrument.</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_Protein250_kits.png"></div><div class="txtContainer">Bioanalyzer protein kits provide microfluidic chips, reagents, and consumables needed to run assays with your Agilent 2100 Bioanalyzer instrument to determine protein concentration, characterization, and purity.</div></div></div>',
										},
										
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_Software_plant_rna_nano.png"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/automated-electrophoresis/bioanalyzer-systems/bioanalyzer-software" target="_blank">The 2100 Expert Software for Bioanalyzer offers powerful data analysis tools for all available assays, allowing you to get the most out of your Bioanalyzer system.	</a></div></div></div>',
										},
																				
										
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application Note</span><p>Quality Control of NGS Libraries with Daisy Chain Molecules</p><a href="https://www.agilent.com/cs/library/applications/application-QC-NGS-daisy-chain-5994-2233EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-QC-NGS-daisy-chain-5994-2233EN-agilent.pdf</a></li><li><span class="headingBold">Brochure</span><p>Secure Experimental Success </p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-protein-sample-control-2100-bioanalyzer-5994-0088EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-protein-sample-control-2100-bioanalyzer-5994-0088EN-agilent.pdf</a></li><li><span class="headingBold">Application Compendium</span><p>Applications for DNA, RNA, and Protein Analysis</p><a href="https://www.agilent.com/cs/library/applications/5991-8974EN_Bioanalyzer-TapeStation_appcompendium.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5991-8974EN_Bioanalyzer-TapeStation_appcompendium.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:'<div class="hotspotInfo">Agilent 4150 TapeStation System<ul><li>Economic, entry-level system</li><li>Analysis of up to 16 DNA or RNA samples</li></ul></div>',
								instrumentTitle:'Agilent 4150 TapeStation System',
								instrumentImg:'images/4150_tapestation.png',
								instrumentInfo:"The TapeStation systems are <br>all-in-one platforms that provide end-to-end automated DNA and RNA sample QC. No matter your starting sample type, the TapeStation system can analyze them with accurate and precise ScreenTape devices for low-, medium-, and high-throughput workflows.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Integrity standards for RNA and DNA samples extracted from FFPE material  provide reproducible and objective sample integrity analysis</li><li>Simplify your workflow with fully automated sample processing and ready-to-use ScreenTape technology</li><li>Broad application portfolio covers a large range of sample types and concentrations</li><li>Results are obtained quickly; in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples</li><li>ScreenTape technology guarantees constant cost-per-sample and thus predictable consumable costs</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/tapestation-systems/tapestation-dna-screentape-reagents/cell-free-dna-screentape-analysis-294915" target="_blank">Cell-free DNA ScreenTape Assay</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/tapestation-systems/tapestation-dna-screentape-reagents/genomic-dna-screentape-analysis-228261#:~:text=Genomic%20DNA%20ScreenTape%20analysis%20provides,from%20multiple%20sources%20including%20FFPE" target="_blank">Genomic DNA ScreenTape Assay</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity RNA ScreenTape Assay</div></div></div>',
										},
												
										
										{
											tabName:"Literature",
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:'<div class="hotspotInfo">Agilent 4200 TapeStation System<ul><li>Walk-away automation in a benchtop system </li><li> Analyse up to 96 DNA or RNA samples</li></ul></div>',
								instrumentTitle:'Agilent 4200 TapeStation System',
								instrumentImg:'images/4200_tapestation.png',
								instrumentInfo:"The TapeStation systems <br>are all-in-one platforms that provide end-to-end automated DNA and RNA sample QC. No matter your starting sample type, the TapeStation system can analyze them with accurate and precise ScreenTape devices for low-, medium-, and high-throughput workflows.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Integrity standards for RNA and DNA samples extracted from FFPE material  provide reproducible and objective sample integrity analysis</li><li>Simplify your workflow with fully automated sample processing and ready-to-use ScreenTape technology</li><li>Broad application portfolio covers a large range of sample types and concentrations</li><li>Results are obtained quickly; in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples</li><li>ScreenTape technology guarantees constant cost-per-sample and thus predictable consumable costs</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity RNA ScreenTape Assay</div></div></div>',
										},
												
										
										{
											tabName:"Literature",
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:"ScreenTape Products",
								instrumentTitle:'ScreenTape Products',
								instrumentImg:'images/screentape.png',
								instrumentInfo:"The TapeStation systems are <br>all-in-one platforms that provide end-to-end automated DNA and RNA sample QC. No matter your starting sample type, the TapeStation system can analyze them with accurate and precise ScreenTape devices for low-, medium-, and high-throughput workflows.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Integrity standards for RNA and DNA samples extracted from FFPE material  provide reproducible and objective sample integrity analysis</li><li>Simplify your workflow with fully automated sample processing and ready-to-use ScreenTape technology</li><li>Broad application portfolio covers a large range of sample types and concentrations</li><li>Results are obtained quickly; in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples</li><li>ScreenTape technology guarantees constant cost per sample and thus predictable consumable costs</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity RNA ScreenTape Assay</div></div></div>',
										},
												
										
										{
											tabName:"Literature",
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:"Femto Pulse System",
								instrumentTitle:'Femto Pulse System',
								instrumentImg:'images/Femto_pulse.png',
								instrumentInfo:"The Femto Pulse System is a unique, automated sample QC platform that requires only femtogram-quantity inputs of DNA and RNA, allowing you to conserve precious clinical samples such as circulating tumor (ctDNA) and cell-free DNA (cfDNA). It provides unparalleled sensitivity and resolution of even high-molecular-weight (HMW) fragment up to 165 kb in size in about 90 minutes. The Femto Pulse system is ideal for NGS applications (including long-read NGS) and sample QC of cfDNA and ctDNA from liquid biopsies, genomic and hmwDNA, total and messenger RNA, and BAC library digests.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Large Fragment Resolution - Separate high molecular weight DNA smears and fragments through 165 kb</li><li>Reduced Separation Time - Analyze your samples in about 1.5 hours</li><li>High Analytical Sensitivity - Achieve 10 times higher sensitivity for nucleic acid smears and up to 100 times higher for nucleic acid fragments</li><li>Simple Sample Preparation - Minimize sample degradation with fewer pipetting steps and stable reagents</li><li>Powerful Analysis Software - One intuitive software program automates analysis of diverse sample types</li><li>Conserve Precious Sample - Unparalleled sensitivity allows you to use less precious sample and achieve superior detection</li><li>Make Workflows More Efficient - Eliminate pulsed-field gel electrophoresis from long-read NGS library preparation and BAC analysis</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Ultra_Sensitivity_NGS_Kit.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-dna-analysis-kits/ultra-sensitivity-ngs-kit-365740" target="_blank">Ultra Sensitivity NGS Kit</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_165kb_Kit.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-dna-analysis-kits/genomic-dna-165-kb-kit-365739" target="_blank">Genomic DNA 165 kb Kit </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Ultra_Sensitivity_RNA_Kit.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-rna-analysis-kits/ultra-sensitivity-rna-kit-365761" target="_blank">Ultra Sensitivity RNA Kit</a></div></div></div>',
										},
												
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Femto_Pulse_software.jpg"></div><div class="txtContainer">The powerful and intuitive Femto Pulse instrument controller software is optimized for acquiring data generated during pulsed-field electrophoresis runs. The multifeatured user interface is easy to use and versatile. It offers validated methods for consistent electrokinetic injections and voltage separations of nucleic acid samples.</div></div></div>',
										},
												
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Brochures</span><p>Fast Separation, Ultra Sensitivity, One Instrument - Agilent Femto Pulse System </p><a href="https://www.agilent.com/cs/library/brochures/brochure-fast-separation-ultra-sensitivity-one-instrument-femto-pulse-5994-0410en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-fast-separation-ultra-sensitivity-one-instrument-femto-pulse-5994-0410en-agilent.pdf</a></li><li><span class="headingBold">Application notes</span><p>Genomic DNA Handling and the Agilent Femto Pulse System </p><a href="https://www.agilent.com/cs/library/applications/application-gDNA-handling-Femto-Pulse-5994-2723en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-gDNA-handling-Femto-Pulse-5994-2723en-agilent.pdf</a><p>cfDNA Separated on the Agilent Femto Pulse System</p><a href="https://www.agilent.com/cs/library/applications/application-cfdna-separation-fempto-pulse-5994-0514en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-cfdna-separation-fempto-pulse-5994-0514en-agilent.pdf </a><p>Genomic DNA Sizing and Quality Control on the Agilent Femto Pulse System</p><a href="https://www.agilent.com/cs/library/applications/application-genomic-dna-sizing-quality-femto-pulse-5994-0516en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-genomic-dna-sizing-quality-femto-pulse-5994-0516en-agilent.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:"Fragment Analyzer System",
								instrumentTitle:'Fragment Analyzer System',
								instrumentImg:'images/Fregment_analyzer.png',
								instrumentInfo:"The Fragment Analyzer System helps eliminate your NGS library prep bottlenecks by enabling automated sample QC of DNA or RNA samples. It features a broad range of sample types (including gDNA, small, and total RNA, hmwDNA, and cfDNA) and different capillary lengths that let you obtain a perfect mix of speed and resolution. This versatility allows you to tailor and optimize your sample QC to your specific NGS workflows, particularly for challenging clinical sample types such as cfDNA, ctDNA, and formalin-fixed paraffin-embedded (FFPE) samples.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Separate 12 samples in parallel in as little as 15 minutes</li><li>Choose between three different capillary array lengths for the required blend of speed or resolution</li><li>Minimize instrument preparation time with no daily array handling requirements and room-temperature stable reagents</li><li>See clear results with separation resolution as good as 3 bp from fragments under 300 bp</li><li>Improve lab efficiency by loading and programming samples while separation is currently running</li><li>Move samples up or down in queue to adjust run priorities</li><li>Use quality metrics for RNA (RQN) and genomic DNA (GQN) to remove subjective quality assessments</li><li>Kits provide a wide dynamic range covering two orders of magnitude</li><li>Achieve accurate molarity calculations with reliable smear analysis</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Small_fragment_and_NGS_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/small-fragment-ngs-kits-365701" target="_blank">Small Fragment and NGS Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Large_Fragment_Analysis_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/large-fragment-analysis-kits-365703" target="_blank">Large Fragment Analysis Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_Kits.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/genomic-dna-kits-365702" target="_blank">Genomic DNA Kits</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Fragment_Analyzer_RNA_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-rna-analysis-kits/fragment-analyzer-rna-kits-365734" target="_blank">Fragment Analyzer RNA Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Small_RNA_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-rna-analysis-kits/small-rna-kits-365732" target="_blank">Small RNA Kits </a></div></div></div>',
										},
												
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Fragment_Analyzer_software.jpg"></div><div class="txtContainer">The Fragment Analyzer controller software is optimized to acquire data for low- to ultrahigh-throughput laboratories. The easy-to-use multifeatured software interface provides tested methods for nucleic acid molecules. It generates digital data for the quick and easy visual analysis of DNA and RNA size, concentration, and quality. It provides objective DNA and RNA quality metrics and can be used to analyze a wide range of nucleic acids.</div></div></div>',
										},
												
										
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Reliable Results for Nucleic Acid Analysis. Agilent 5200, 5300, and 5400 Fragment Analyzer Systems </p><a href="http://www.agilent.com/cs/library/brochures/brochure-reliable-nucleic-acid-sample-analysis-fragment-analyzer-5994-0414en-agilent" target="_blank">http://www.agilent.com/cs/library/brochures/brochure-reliable-nucleic-acid-sample-analysis-fragment-analyzer-5994-0414en-agilent</a></li><li><span class="headingBold">Application notes</span><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions </p><a href="http://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">http://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf</a><p>Comparison of HS Small Fragment Kit and HS NGS Fragment Kit on the Agilent 5200 Fragment Analyzer System</p><a href="http://www.agilent.com/cs/library/applications/application-genomic-dna-analysis-fragment-analyzer-5994-0515en-agilent.pdf" target="_blank">http://www.agilent.com/cs/library/applications/application-genomic-dna-analysis-fragment-analyzer-5994-0515en-agilent.pdf</a><p>Best Sizing Practices with the Agilent 5200 Fragment Analyzer System</p><a href="https://www.agilent.com/cs/library/applications/application-nucleic-acid-fragment-sizing-fragment-analyzer-5994-0585en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-nucleic-acid-fragment-sizing-fragment-analyzer-5994-0585en-agilent.pdf</a><p>Best Quantification Practices with the Agilent 5200 Fragment Analyzer System</p><a href=" https://www.agilent.com/cs/library/applications/application-nucleic-acid-quantification-fragment-analyzer-5994-0513en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-nucleic-acid-quantification-fragment-analyzer-5994-0513en-agilent.pdf</a></li></ul></div>',
										},
								]
							},
					]	
				},
										
				2:{
					workflowName : "Library Preparation & Target Enrichment",
					labImg:"images/Library_Preparation_Lab.svg",
					valueProposition:"Hybrid-capture targeted sequencing is a sensitive technology that provides a more time-effective and sensitive NGS approach for investigating cancer-associated genetic and genomic aberrations such as SNVs, CNVs, translocations, and more. By enriching NGS libraries for specific genomic regions, targeted sequencing enables you to identify even rare variants (such as clonal and subclonal mutations), helping you to identify specific cancer signatures and guide therapies.",
                    agilentOfferings:"Agilent provides a full suite of hybridization capture-based target enrichment NGS products, including library preparation and target enrichment kits, catalog and custom probe sets, sample quality control, and automation platforms. Whether your oncology customers need a catalog NGS panel or a custom design focused on their cancer(s) of interest, Agilent has the solutions for you.",				
					
					instrumentList :[
							{
								instrumentSubList:[
									{
										intrumentHotspotName:"SureSelect Reagent Kit",
										instrumentTitle:'SureSelect',
										instrumentImg:'images/SureSelect_reagents_kit.png',
										instrumentInfo:"If your customers need a more personalized panel, you can easily design custom probes for their targets of interest with SureDesign. This free web-based application offers the flexibility of our SurePrint oligo manufacturing technology to create NGS panels and/or probe sets tailored to the specific needs of your customers.",
										tabList :[
												{
													tabName:"Key features ",	
													tabInfo: '<div class="dataContainer"><ul> <li>Create custom SureSelect or HaloPlex target enrichment library designs based on the targets you want to sequence</li><li>Define regions of interest and select probes based on target genes, genomic coordinates, or selection parameters</li><li>Identify potential target candidate sites in the input or selected background</li><li>Download ready-to-order DNA sequence templates</li><li>Generate high-quality libraries with as little as 10 ng of DNA input from intact or highly fragmented FFPE samples</li><li>The modular design enables processing DNA and RNA samples with a streamlined and parallel workflow using XT HS2 chemistry</li><li> Use single/duplex molecular barcodes (MBC) to remove false positives and accurately detect variants down to ≤1% variant allele frequency</li> <li>MBCs can also improve the accuracy of gene expression profile</li><li>Minimize index hopping with 384 unique dual indexes</li><li>Generate high-quality libraries with as little as 10 ng of DNA input from intact or highly fragmented FFPE samples</li><li>The modular design enables processing DNA and RNA samples with a streamlined and parallel workflow using XT HS2 chemistry</li><li> Use single/duplex molecular barcodes (MBC) to remove false positives and accurately detect variants down to ≤1% variant allele frequency</li> <li>MBCs can also improve the accuracy of gene expression profile</li><li>Minimize index hopping with 384 unique dual indexes</li><li>SureSelect Exomes offer superior coverage with excellent overall exonic coverage and enhanced coverage of disease-associated regions annotated in HGMD, OMIM, ClinVar, and ACMG databases</li><li>SureSelect Cancer All-In-One Assays provide all-in-one profiling of SNVs, indels, CNVs, and translocations relevant to somatic cancer from a single DNA sample of 50 ng or less</li><li>Agilent Community Designs offer NGS panels with the content derived from experts in the respective disciplines</li></ul></div>',
												},
												
												{
													tabName:"Reagents and Kits",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-custom-ngs-assays-520080" target="_blank">SureSelect Cancer All-In-One Custom NGS Assays</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Custom_DNA_Target_Enrichment.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-custom-target-enrichment-probes/ngs-custom-target-enrichment-probes-232874" target="_blank">SureSelect Custom DNA Target Enrichment Probes</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Custom_DNA_Target_Enrichment.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-custom-target-enrichment-probes/sureselect-custom-rna-target-enrichment-probes-232875" target="_blank">SureSelect Custom RNA Target Enrichment Probes</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_HS2_DNA_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/dna-seq-reagents-kits-library-preparation-kits/sureselect-xt-hs2-dna-reagent-kit-783974" target="_blank">SureSelect XT HS2 DNA Reagent Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/dna-seq-reagents-kits-library-preparation-kits/sureselectxt-low-input-reagent-kits-232858" target="_blank">SureSelect XT Low Input Reagent Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_HS2_RNA_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/rna-seq-library-preparation-kits/sureselect-xt-hs2-rna-reagent-kit-1049115" target="_blank">SureSelect XT HS2 RNA Reagent Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-lung-assay-520074" target="_blank">SureSelect Cancer All-In-One Lung Assay  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-custom-ngs-assays-520080" target="_blank">  SureSelect Cancer All-In-One Custom NGS Assays </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-solid-tumor-assay-520077" target="_blank"> SureSelect Cancer All-In-One Solid Tumor Assay  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-focused-exome-232869" target="_blank">SureSelect Focused Exome</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-clinical-research-exome-v2-232867" target="_blank">SureSelect Clinical Research Exome V2</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-human-all-exon-v7-232866" target="_blank">SureSelect Human All Exon </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-non-human-exomes-232868" target="_blank">SureSelect Non-human Exomes  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Oncology_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/agilent-community-designs-for-oncology-research-750982" target="_blank">Agilent Community Designs for Oncology Research     </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Human_Genetics_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/inherited-disease-research-designs-536204"> Agilent Community Designs for Human Genetics  Research </a></div></div></div>',
												},
														
												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureDesign.jpg"></div><div class="txtContainer"><a href="https://earray.chem.agilent.com/suredesign/index.htm?sessiontimeout=true" target="_blank">SureDesign: Easily create custom SureSelect targeted NGS probes and panels in minutes with unmatched flexibility.</a> </div></div></div>',
												},
														
												{
													tabName:"Videos",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Custom_Genomics_Overview.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/agilent-custom-genomics-overview" target="_blank">Agilent Custom Genomics Overview</a> </div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XTHS2_DNA_Reagent_Kit_webinar.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/sureselect-xths2-dna-kit-webinar" target="_blank">SureSelect XT HS2 DNA Reagent Kit Webinar</a> </div></div><div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XTHS2_RNA_Reagent_Kit_webinar.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/sureselect-xt-hs2-rna-kit-eseminar" target="_blank">SureSelect XT HS2 RNA Reagent Kit Webinar</a> </div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Glasgow_Cancer_Core_Panel_Webinar.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/glasgow-cancer-core-panel-webinar" target="_blank">Glasgow Cancer Core Panel Webinar </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Automating_SureSelect_NGS_workflow.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/automating-the-sureselect-ngs-workflow" target="_blank">Automating the SureSelect NGS workflow </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_and_4150_TapeStation.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-4150-tapestation-video" target="_blank"> Disease gene identification by exome sequencing</a></div></div>',
												},
														
												{
													tabName:"Literature",
													tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyers</span><p>SureDesign Custom Portal</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf </a><p>Agilent NGS Design Testing Service</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf</a><p>Agilent Community Design Oncology Research NGS Panels</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-genomics-glasgow-panel-5994-1477en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-genomics-glasgow-panel-5994-1477en-agilent.pdf</a><p>Agilent Community Designs for Infectious Disease Research </p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ACD-coronavirus-5994-2154EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-ACD-coronavirus-5994-2154EN-agilent.pdf</a><p>Agilent Community Design Infectious Disease Pathogen NGS Panels</p><a href="https://www.agilent.com/cs/library/flyers/public/ACD%20Pathogen%20Infectious%20Disease%20Flyer_2.4.pdf?elqTrackId=8af96419240e4b7ab41bb65abd909623&elqaid=2533&elqat=2" target="_blank">https://www.agilent.com/cs/library/flyers/public/ACD%20Pathogen%20Infectious%20Disease%20Flyer_2.4.pdf?elqTrackId=8af96419240e4b7ab41bb65abd909623&elqaid=2533&elqat=2</a><p>Agilent Community Designs for Model Organism Exome</p><a href="https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Model%20Organism%20Flyer%205994-1441EN%201.4.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Model%20Organism%20Flyer%205994-1441EN%201.4.pdf</a><p>Agilent Community Design Epigenetic Research Panels</p><a href="https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Methyl%20Seq%20Flyer%205994-1440EN%201.3.pdf">https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Methyl%20Seq%20Flyer%205994-1440EN%201.3.pdf</a></li><li><span class="headingBold">Data Sheets</span><p>SureSelect XT HS2 DNA Reagent Kit</p><a href="https://www.agilent.com/cs/library/datasheets/public/XT-HS2-Datasheet-5994-1687EN-1-5.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/XT-HS2-Datasheet-5994-1687EN-1-5.pdf</a><p>SureSelect XT HS2 RNA Reagent Kit</p><a href="https://www.agilent.com/cs/library/datasheets/public/datasheet-sureselect-xt-hs2-RNA-reagent-kit-5994-2314EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/datasheet-sureselect-xt-hs2-RNA-reagent-kit-5994-2314EN-agilent.pdf</a><p>SureSelect Cancer All-In-One Lung Assay</p><a href="https://www.agilent.com/cs/library/datasheets/public/5994-0231EN.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/5994-0231EN.pdf</a><p>SureSelect All-in-One Tumor Assay</p><a href="https://www.agilent.com/cs/library/datasheets/public/AIO-Solid-Tumor-Datasheet-5994-1005EN-1_6.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/AIO-Solid-Tumor-Datasheet-5994-1005EN-1_6.pdf</a></li><li><span class="headingBold">Application Note</span><p>Optimizing the Human Whole Exome Sequencing Process</p><a href="https://www.agilent.com/cs/library/applications/5994-0667EN.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-0667EN.pdf</a></li><li><span class="headingBold">Brochure</span><p>SureSelect V7</p><a href="https://www.agilent.com/en/promotions/sureselect-human-all-exon-v7-form" target="_blank">https://www.agilent.com/en/promotions/sureselect-human-all-exon-v7-form</a><p>Innovation Powered by You </p><a href="https://www.agilent.com/cs/library/brochures/Agilent_Community_Designs_Solutions_Brochure_CPOD_59940890EN.pdf">https://www.agilent.com/cs/library/brochures/Agilent_Community_Designs_Solutions_Brochure_CPOD_59940890EN.pdf</a><p>SureSelect Cancer All-In-One Custom and Catalog NGS Assays</p><a href="https://www.agilent.com/cs/library/brochures/NGS%20SureSelect%20Cancer%20All-In-One%20Brochure%205994-0668EN%204.8%20(single%20pages).pdf" target="_blank">https://www.agilent.com/cs/library/brochures/NGS%20SureSelect%20Cancer%20All-In-One%20Brochure%205994-0668EN%204.8%20(single%20pages).pdf</a></li></ul></div>',
												},
										]
									},	
								],
							},  
							
							{
								intrumentHotspotName:'SureDesign',
								instrumentTitle:'SureDesign',
								instrumentImg:'images/SureSelect_reagents_kit.png',
								instrumentInfo:"SureDesign is a web-based application that harnesses the flexibility of SurePrint oligo manufacturing technology for the creation of custom NGS target enrichment libraries, CGH microarray designs, and FISH probes. SureDesign, free to all registered users, has an intuitive design wizard that creates custom panels specific to research needs, as well as for cross-validation using multiple applications. ",
								tabList :[
									{
										tabName:"Key features",	
										tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>NGS Target Enrichment: Create custom SureSelect or HaloPlex target enrichment library designs based on the targets you want to sequence</li><li>Define regions of interest and select probes based on target genes, genomic coordinates, or selection parameters</li><li>CGH, ChIP-on-chip, DNA Methylation: Create custom CGH designs with various layouts, from 8 x 15 K up to 1 x 1 M</li><li>CRISPR Guide RNAs: Find gRNAs that target CRISPR sites within any sequence</li><li>Identify potential target candidate sites in the input or selected background</li><li>Download ready to order DNA sequence templates</li><li>FISH Probes: Input gene names, accession IDs, or genomic coordinates to create custom break apart, dual fusion or single probes</li><li>Rapidly validate results by creating the same assay on a FISH probe and an array or target enrichment library</li></ul></div>',
									},
									{
										tabName:"Reagents and Kits",
										tabInfo: '<div class="dataContainer"><div class="reagentsContent"></div></div>',
									},
									
									{
										tabName:"Software",
										tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureDesign.jpg"></div><div class="txtContainer"><a href="https://earray.chem.agilent.com/suredesign/index.htm?sessiontimeout=true" target="_blank">SureDesign</a> </div></div></div>',
									},
										
									{
										tabName:"Videos",
										tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Custom_Genomics_Overview.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/agilent-custom-genomics-overview" target="_blank">Agilent Custom Genomics Overview</a> </div></div></div>',
									},
											
									{
										tabName:"Literature",
										tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyers</span><p>Agilent NGS Design Testing Service</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf" target="_blank"> https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf</a><p>SureDesign Custom Portal Flyer</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf</a></li></ul></div>',
									},
								]
							},
							
							{
								intrumentHotspotName:"Magnis NGS Prep System",
								instrumentTitle:'Magnis NGS Prep System',
								instrumentImg:'images/Magnis_NGS_Prep_system.png',
								instrumentInfo:"The Magnis system provides a fully automated NGS library preparation platform that makes it easy to assay multiple genes and/or complex genetic aberrations with high reproducibility. Its walk-away automation reduces <br>your hands-on time to as little as five minutes for library prep of up to eight samples, accelerating your turnaround time to as little as three days and giving you more consistent data.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>Minimal NGS experience required to run the Magnis</li><li>Scalable, walk-away automation ideal for low-to-medium-throughput labs</li><li>Efficient workflows let you save time and focus on data analysis rather than hands-on time in the lab</li><li>Validated, ready-to-use protocols that are pre-optimized with SureSelect reagents</li><li>Seamless integration with Agilent NGS workflow solutions for sample preparation, QC, data analysis, and clinical interpretation</li><li>When combined with the Agilent 4150 TapeStation System, the Magnis system provides quality control of the sample throughout the workflow</li></li></ul></div>',
										},
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_SureSelect_XT_HS_Reagents.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-automation-platforms/magnis-sureselect-xths-reagents-456506" target="_blank">Magnis SureSelect XT HS Reagents</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/hybridization-based-next-generation-sequencing-(ngs)/ngs-custom-target-enrichment-probes/sureselect-cancer-all-in-one-custom-ngs-assay-282156" target="_blank">SureSelect Cancer All-In-One Custom NGS Assay</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/hybridization-based-next-generation-sequencing-(ngs)/dna-seq-reagents-kits-library-preparation-kits/sureselectxt-hs-reagent-kits-232857" target="_blank">SureSelectXT HS Reagent Kits</a></div></div></div>',
										},
										
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Placeholder.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/magnis-software-download-page?productURL=https%3A%2F%2Fwww.agilent.com%2Fen%2Fproduct%2Fnext-generation-sequencing%2Fhybridization-based-next-generation-sequencing-ngs%2Fngs-automation-platforms%2Fmagnis-ngs-prep-system-291083" target="_blank">Magnis Software Download Version 1.1.1: </div></div></div>',
										},
										
										{
											tabName:"Videos",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_Complete_System_for_NGS_Library_Preparation.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-complete-system-for-ngs-library-preparation" target="_blank">Magnis: Complete System for NGS Library Preparation</a></div></div></div>',
										},
										
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application notes</span><p>Bridging the Efficiency and Throughput Gap with Magnis Automated NGS Library Preparation Solution</p><a href="https://www.agilent.com/cs/library/applications/application-bridging-efficiency-gap-magnis-5994-2457EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-bridging-efficiency-gap-magnis-5994-2457EN-agilent.pdf</a><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions</p><a href="https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf </a></li><li><span class="headingBold">Brochures</span><p>Magnis NGS Prep System</p><a href="https://www.agilent.com/cs/library/brochures/Magnis%20System%20Brochure%205994-0661EN.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/Magnis%20System%20Brochure%205994-0661EN.pdf </a></li><li><span class="headingBold">Data Sheets</span><p>Agilent Magnis NGS Prep System</p><a href="https://www.agilent.com/cs/library/datasheets/public/Magnis%20NGS%20Prep%20System%20Datasheet%205994-1624EN.pdf">https://www.agilent.com/cs/library/datasheets/public/Magnis%20NGS%20Prep%20System%20Datasheet%205994-1624EN.pdf </a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:"Agilent Bravo NGS System",
								instrumentTitle:'Agilent Bravo NGS System',
								instrumentImg:'images/Bravo_NGS.png',
								instrumentInfo:"The Agilent Bravo NGS system is an automated liquid handling platform for labs that require versatility and high throughput. This system features Pre-configured hardware and protocols for your routine NGS workflows, but provides the flexibility for advanced users to develop and automate in-house protocols to minimize turnaround time for your customers.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Quickly automate with ready-to-use protocols and pre-developed methods for Agilent SureSelect, Agilent HaloPlex, Illumina TruSeq, NuGEN Ovation, KAPA HTP, PacBio SMRTbell, NEBNext, and more</li><li>Easy-to-use interface requires no programming expertise to run your automated methods</li><li>Consistent data quality allows you to increase your throughput, with consistent results every time</li><li>Prepare up to ten times more samples in the same time</li><li>Open platform allows you to automate more NGS or genomics methods with confidence</li></ul></div>',
										},
			
										{
											tabName:"Videos",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Bravo_Automated_Sample_Preparation.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/video/automated-sample-prep-bravo-portfolio" target="_blank">Agilent Bravo Automated Sample Preparation</a></div></div></div>',
										},
												
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul> <li><span class="headingBold">Flyer</span><p>Agilent Scalable Automation Solutions</p><a href="https://www.agilent.com/cs/library/flyers/public/5991-2439EN.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/5991-2439EN.pdf</a> <li><span class="headingBold">Brochure</span><p>Agilent Automation Solutions Portfolio</p><a href="https://www.agilent.com/cs/library/brochures/5991-2469EN_lores.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/5991-2469EN_lores.pdf</a> <li><span class="headingBold">Application Note</span><p>Automation of the Lexogen QuantSeq 3 mRNA Kit on the Agilent NGS Workstation</p></li></ul></div>',
										},
								    ]
							},	
					]
				},
							  							
				3:{
					workflowName : "Data Analysis & Reporting",
					labImg:"images/Data_Analysis_lab.svg",
					valueProposition:"Analyzing, storing, and reporting cancer-associated variants pose significant challenges for a pathology lab. The Alissa Clinical Informatics suite trivializes these difficulties with a universal platform that features a simple workflow, up-to-date knowledge bases, and easy integration with your LIMS or BioIT systems. These solutions streamline your analytical workflows and feature end-to-end support so you can take your cancer findings from raw data to published reports in less time.	",
                    
					instrumentList :[
							{
								intrumentHotspotName:"SLIMS",
								instrumentTitle:'SLIMS',
								instrumentImg:'images/SLIMS_instrument.png',
								instrumentInfo:"SLIMS combines the best of a LIMS and ELN to visually track samples through complex NGS workflows. You can design NGS plates through batch processing or with drag-and-drop functionality, track external barcodes, assign indexes on a plate layout, or generate libraries.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li>Assign lanes and pool libraries by drag and drop with automatic index ambiguity checks</li><li>Integrate with protocols and external analysis platforms to completely support your workflows</li><li>Drag and drop NGS plates with the user-friendly interface, and assign library barcodes with the click of a button</li><li> Analyze NGS data with Galaxy and Gene Pattern hooked into one platform to reduce manual effort</li><li>Export sample sheets and plate design, and manage sequencing of MiSeq, HiSeq, and NovaSeq files within the same interface</li></ul></div>',
										},
										
										
												
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/SLIMS_software.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/software-informatics/lab-workflow-management-software/slims" target="_blank">Link to SLIMS page</a></div></div></div>',
										},
												
																						
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Brochure</span><p>Agilent SLIMS</p><a href="https://www.agilent.com/cs/library/brochures/brochure-slims-5994-1578en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-slims-5994-1578en-agilent.pdf</a></li></ul></div>',
										},
								]
							},
							{
								instrumentSubList:[
									{
										intrumentHotspotName:"Alissa Clinical Informatics",
										instrumentTitle:'Alissa Secondary Analysis',
										instrumentImg:'images/Alissa_clinical_information.png',
										instrumentInfo:" Unlock true value from your raw sequencing data with the Alissa Informatics secondary analysis solution. ", 
										
										tabList :[
												{
													tabName:"Key features",	
													tabInfo: '<div class="dataContainer"><ul><li>Scalable NGS secondary data analysis solution</li><li>Optimized algorithms to detect SNPs/Indels, CNVs, LOH, and Translocations</li><li>Superior visualization tools to aid reviewing called variants in context<li>Integrated QC to inform confidence in assay results</li><li>Seamless integration with Alissa Interpret for clinical-grade variant assessment and reports, reducing workflow complexity and time from FASTQ to report</li></ul></div>',
												},
												
																								
												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/teaser_align_call.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/next-generation-sequencing/clinical-informatics-platform/alissa-align-call-930087">Alissa Align and Call</a></div></div></div>',
												},
														
												
												{
													tabName:"Literature",
													tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application Notes</span><p>Analysis of OneSeq on Alissa Clinical Informatics Platform</p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a><p>Alissa Interpret AMP Battle of Pipelines </p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a></li><li><span class="headingBold">Brochure</span><p>Molecular Pathology: Genoptic</p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a></li></ul></div>',
												},
										]
									},
									
									{
										intrumentHotspotName:"Alissa Interpret",
										instrumentTitle:'Alissa Interpret',
										instrumentImg:'images/Alissa_clinical_information.png',
										instrumentInfo:"Your data has given you numerous variants, but which ones are important—or have already been reported? Alissa Interpret gives you a web-based informatics solution that lets you rapidly triage, curate, and report the genomic variants that are most likely to be driving novel biological functions.",
										disclaimer:true,
										disclaimerTxt:"Disclaimer: Alissa Interpret is a USA Class I Exempt Medical Device, Europe CE IVD, Canada, and Australia Class I IVD Device.",
										tabList :[
												{
													tabName:"Key features",	
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li>Cloud-based SaaS solution to minimize turnaround time from VCF to report</li><li>Community-driven and premium third-party knowledge bases</li><li>Internal managed variant lists with full traceability, reproducibility, and versioning of annotation sources</li><li>Visualization and interpretation of SNPs, indels, CNVs, LOH, and translocations/fusion genes</li><li>Agnostic solution for small panels to exomes and whole genomes with compatibility to support any design, sequencer, or assay</li></ul></div>',
												},

												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/teaser_alissa_interpret.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/next-generation-sequencing/clinical-informatics-platform/alissa-interpret-930086">Alissa Interpret </a></div></div></div>',
												},
														
																								
												{
													tabName:"Literature",
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li><span class="headingBold">Data Sheets</span><p>Alissa Interpret</p><a href="https://www.agilent.com/cs/library/brochures/Copy%20of%20Alissa%20Interpret%20Datasheet_5991-8498EN.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/Copy%20of%20Alissa%20Interpret%20Datasheet_5991-8498EN.pdf </a></li><li><span class="headingBold">Case Study Compendium</span><p>Alissa Clinical Informatics Platform</p><a href="https://www.agilent.com/cs/library/casestudies/public/5991-8535EN.pdf" target="_blank">https://www.agilent.com/cs/library/casestudies/public/5991-8535EN.pdf</a></li></ul></div>',
												},
										]
									},
									
									
								]
								
							},

							
					]
				},
			}
		},

		2:{
			personaName:"Geneticist",
			personaIcon:"images/Genetic_Researcher_icon.png",
			bgColor:"#F2A900",
			personaBand:"images/band_orange.png",
			personaDescription:"I work in a research lab, where I design experiments to uncover novel biology from samples obtained from our historical sample banks. In academia, my main goal is to publish findings in scientific journals that will one day translate into the clinic; in pharma, my goal is to uncover novel biology that paves the way to a new drug.		",
			workflowList:{
				1:{
					workflowName : "Sample Quality Control (QC)",
					labImg:"images/Sample_QC_lab.svg",
					valueProposition:"Sample quality control throughout the library preparation process helps generate more reproducible and accurate data by identifying samples that are of insufficient quality and/or quantity to yield successful sequence data. This helps save your lab money and resources while shortening your time to results—and to publication.",	
					agilentOfferings:'<p>The Agilent automated electrophoresis portfolio offers several instruments for QC analysis of nucleic acids, including the Agilent 2100 Bioanalyzer system, Fragment Analyzer systems, TapeStation systems, and Femto Pulse system.</p>',		

					instrumentList :[
					
							{
								intrumentHotspotName:"Agilent Bioanalyzer System",
								instrumentTitle:'Agilent Bioanalyzer System',
								instrumentImg:'images/Bioanalyzer_system.png',
								instrumentInfo:"The Agilent 2100 Bioanalyzer system is an established automated electrophoresis solution for the sample quality control of biomolecules. The system integrates an instrument, data processing software, reagents, and a microfluidic chip specific for DNA, RNA, or protein analysis. It is suitable for <br>next-generation sequencing (NGS), gene expression, biopharmaceutical, and genome editing workflows, delivering highly precise analytical evaluation of various sample types. Advantages of microfluidics-based automated electrophoresis over traditional gel electrophoresis include dramatically reduced sample (1 µL for nucleic acids, 4 µL for proteins) and reagent consumption, significantly faster analysis time, and less hands-on activities during sample preparation and data analysis. The Agilent 2100 Bioanalyzer system is ideal for the scientist requiring a versatile instrument for nucleic acids and protein electrophoresis analysis with moderately low throughput (10-12 samples) needs.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Replaceable electrode cartridges that can be easily exchanged for contamination-free switching between methods</li><li>The system features minimum exposure to hazardous materials to ensure operator safety</li><li> The 2100 Bioanalyzer instrument is compliant with European RoHS directives</li><li> For GLP/GMP environments, the 2100 Bioanalyzer system offers IQ and OQ services, as well as features to enable 21 Cf Part 11 compliance</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_DNA_kits.png"></div><div class="txtContainer">Bioanalyzer DNA kits provide microfluidic chips, reagents, and consumables needed to run DNA sample assays with your Agilent 2100 Bioanalyzer instrument.</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_RNA_kits.png"></div><div class="txtContainer">Bioanalyzer RNA kits provide microfluidic chips, reagents, and consumables needed to run RNA sample assays with your Agilent 2100 Bioanalyzer instrument.</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_Protein250_kits.png"></div><div class="txtContainer">Bioanalyzer protein kits provide microfluidic chips, reagents, and consumables needed to run assays with your Agilent 2100 Bioanalyzer instrument to determine protein concentration, characterization, and purity.</div></div></div>',
										},
										
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_Software_plant_rna_nano.png"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/automated-electrophoresis/bioanalyzer-systems/bioanalyzer-software" target="_blank">The 2100 Expert Software for Bioanalyzer offers powerful data analysis tools for all available assays, allowing you to get the most out of your Bioanalyzer system.	</a></div></div></div>',
										},									
										
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application Notes</span><p>Quality Control of NGS Libraries with Daisy Chain Molecules</p><a href="https://www.agilent.com/cs/library/applications/application-QC-NGS-daisy-chain-5994-2233EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-QC-NGS-daisy-chain-5994-2233EN-agilent.pdf</a></li><li><span class="headingBold">Brochure</span><p>Secure Experimental Success </p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-protein-sample-control-2100-bioanalyzer-5994-0088EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-protein-sample-control-2100-bioanalyzer-5994-0088EN-agilent.pdf</a></li><li><span class="headingBold">Application Compendium</span><p>Applications for DNA, RNA, and Protein Analysis</p><a href="https://www.agilent.com/cs/library/applications/5991-8974EN_Bioanalyzer-TapeStation_appcompendium.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5991-8974EN_Bioanalyzer-TapeStation_appcompendium.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:'<div class="hotspotInfo">Agilent 4150 TapeStation System<ul><li>Economic, entry-level system</li><li>Analysis of up to 16 DNA or RNA samples</li></ul></div>',
								instrumentTitle:'Agilent 4150 TapeStation System',
								instrumentImg:'images/4150_tapestation.png',
								instrumentInfo:"The TapeStation systems are all-in-one platforms that provide end-to-end automated DNA and RNA sample QC for your genomics analyses. No matter your starting sample type and throughput needs, the TapeStation system can match them with accurate and precise ScreenTape devices built for your specific starting sample types and low-, medium-, and high-throughput configuration options.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Simplify your workflow with fully automated sample processing and ready-to-use ScreenTape technology</li><li>Easily switch between DNA and RNA ScreenTape assays for excellent application flexibility</li><li>Wide range of RNA and DNA ScreenTape applications available including assays for genomic and cell-free DNA</li><li>Integrity standards for RNA and DNA provide reproducible and objective sample integrity analysis </li><li>Results are obtained quickly; in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples<div class="txtContent"><p>4150 TapeStation system:</p><p>Constant cost per sample for up to 16 samples per run Compact footprint saves precious bench space in the laboratory Walk-away automation in a benchtop system for the analysis of up to 96 DNA or RNA samples with the 4200 TapeStation system</p></div></li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity RNA ScreenTape Assay</div></div>',
										},
												
																						
										{
											tabName:"Literature",
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control. Agilent 4150 and 4200 TapeStation Systems</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
											
										},
								]
							},
							
							{
								intrumentHotspotName:'<div class="hotspotInfo">Agilent 4200 TapeStation System<ul><li>Walk-away automation in a benchtop system </li><li> Analyse up to 96 DNA or RNA samples</li></ul></div>',
								instrumentTitle:'Agilent 4200 TapeStation System',
								instrumentImg:'images/4200_tapestation.png',
								instrumentInfo:"The TapeStation systems are all-in-one platforms that provide end-to-end automated DNA and RNA sample QC for your genomics analyses. No matter your starting sample type and throughput needs, the TapeStation system can match them with accurate and precise ScreenTape devices built for your specific starting sample types and low-, medium-, and high-throughput configuration options.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Simplify your workflow with fully automated sample processing and ready-to-use ScreenTape technology</li><li>Easily switch between DNA and RNA ScreenTape assays for excellent application flexibility</li><li>Wide range of RNA and DNA ScreenTape applications available including assays for genomic and cell-free DNA.</li><li>Integrity standards for RNA and DNA provide reproducible and objective sample integrity analysis</li><li>Results are obtained quickly; in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples.<div class="txtContent"><p>4200 TapeStation system:</p><p>Walk-away automation in a benchtop system for the analysis of up to 96 DNA or RNA samples</p></div></li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity RNA ScreenTape Assay</div></div>',
										},
												
																						
										{
											tabName:"Literature",
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
											
										},
								]
							},
							
							{
								intrumentHotspotName:"ScreenTape Products",
								instrumentTitle:'ScreenTape Products',
								instrumentImg:'images/screentape.png',
								instrumentInfo:"The TapeStation systems are all-in-one platforms that provide end-to-end automated DNA and RNA sample QC. No matter your starting sample type, the TapeStation system can analyze them with accurate and precise ScreenTape devices for low-, medium-, and high-throughput workflows.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Integrity standards for RNA and DNA samples extracted from FFPE material  provide reproducible and objective sample integrity analysis</li><li>Simplify your workflow with fully automated sample processing and ready-to-use ScreenTape technology</li><li>Broad application portfolio covers a large range of sample types and concentrations</li><li>Results are obtained quickly; in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples</li><li>ScreenTape technology guarantees constant cost per sample and thus predictable consumable costs</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity RNA ScreenTape Assay</div></div>',
										},
												
																						
										{
											tabName:"Literature",
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
											
										},
								]
							},
							
							{
								intrumentHotspotName:'Femto Pulse System',
								instrumentTitle:'Femto Pulse System',
								instrumentImg:'images/Femto_pulse.png',
								instrumentInfo:"The Femto Pulse system is a unique, automated sample QC platform that requires only femtogram-quantity inputs of DNA and RNA, allowing you to conserve your precious samples. It provides unparalleled sensitivity and resolution of even high-molecular-weight fragment up to 165 kb in size in about 90 minutes. The Femto Pulse system is ideal for NGS applications (including long-read NGS) and sample QC of cell-free DNA (cfDNA), genomic and HMW DNA, total and mRNA, and BAC library digests.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>Large Fragment Resolution - Separate high molecular weight DNA smears and fragments through 165 kb</li><li>Reduced Separation Time - Analyze your samples in about 1.5 hours</li><li>High Analytical Sensitivity - Achieve 10 times higher sensitivity for nucleic acid smears and up to 100 times higher for nucleic acid fragments</li><li>Simple Sample Preparation - Minimize sample degradation with fewer pipetting steps and stable reagents</li><li>Powerful Analysis Software - One intuitive software program automates analysis of diverse sample types</li><li>Conserve Precious Sample - Unparalleled sensitivity allows you to use less precious sample and achieve superior detection</li><li>Make Workflows More Efficient - Eliminate pulsed-field gel electrophoresis from long-read NGS library preparation and BAC analysis</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Ultra_Sensitivity_NGS_Kit.jpg"></div><div class="txtContainer"><a href=https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-dna-analysis-kits/ultra-sensitivity-ngs-kit-365740" target="_blank">Ultra Sensitivity NGS Kit</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_165kb_Kit.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-dna-analysis-kits/genomic-dna-165-kb-kit-365739" target="_blank">Genomic DNA 165 kb Kit</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Ultra_Sensitivity_RNA_Kit.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-rna-analysis-kits/ultra-sensitivity-rna-kit-365761" target="_blank">Ultra Sensitivity RNA Kit  </a></div></div></div>',
										},
												
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Femto_Pulse_software.jpg"></div><div class="txtContainer">The powerful and intuitive Femto Pulse instrument controller software is optimized for acquiring data generated during pulsed-field electrophoresis runs. The multifeatured user interface is easy to use and versatile. It offers validated methods for consistent electrokinetic injections and voltage separations of nucleic acid samples.</div></div></div>',
										},
												
										{
											tabName:"Literature",
											tabInfo:'<div id="featuresContent" class="dataContainer"><ul><li><span class="headingBold">Brochure</span><p>Fast Separation, Ultra Sensitivity, One Instrument - Agilent Femto Pulse System</p><a href="  https://www.agilent.com/cs/library/brochures/brochure-fast-separation-ultra-sensitivity-one-instrument-femto-pulse-5994-0410en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-fast-separation-ultra-sensitivity-one-instrument-femto-pulse-5994-0410en-agilent.pdf</a></li><li><span class="headingBold">Application notes</span><p>Genomic DNA Handling and the Agilent Femto Pulse System</p><a href="https://www.agilent.com/cs/library/applications/application-gDNA-handling-Femto-Pulse-5994-2723en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-gDNA-handling-Femto-Pulse-5994-2723en-agilent.pdf</a><p>cfDNA Separated on the Agilent Femto Pulse System</p><a href="https://www.agilent.com/cs/library/applications/application-cfdna-separation-fempto-pulse-5994-0514en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-cfdna-separation-fempto-pulse-5994-0514en-agilent.pdf</a><p>Genomic DNA Sizing and Quality Control on the Agilent Femto Pulse System </p><a href=" https://www.agilent.com/cs/library/applications/application-genomic-dna-sizing-quality-femto-pulse-5994-0516en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-genomic-dna-sizing-quality-femto-pulse-5994-0516en-agilent.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:'Fragment Analyzer System',
								instrumentTitle:'Fragment Analyzer System',
								instrumentImg:'images/Fregment_analyzer.png',
								instrumentInfo:"The Fragment Analyzer System helps eliminate NGS library prep bottlenecks by allowing automated sample QC of DNA or RNA samples. It features a broad range of sample types (including gDNA, small, and total RNA, hmwDNA, and cfDNA) and different capillary lengths let you obtain a perfect mix of speed and resolution. This versatility allows you to tailor and optimize your sample QC to your specific NGS workflows.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>Separate 12 samples in parallel in as little as 15 minutes</li><li>Choose between three different capillary array lengths for the required blend of speed or resolution</li><li>Minimize instrument preparation time with no daily array handling requirements and room-temperature stable reagents</li><li>See clear results with separation resolution as good as 3 bp from fragments under 300 bp</li><li>Improve lab efficiency by loading and programming samples while separation is currently running</li><li>Move samples up or down in queue to adjust run priorities</li><li>Use quality metrics for RNA (RQN) and genomic DNA (GQN) to remove subjective quality assessments</li><li>Kits provide a wide dynamic range covering two orders of magnitude</li><li>Achieve accurate molarity calculations with reliable smear analysis</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Small_fragment_and_NGS_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/small-fragment-ngs-kits-365701">Small Fragment and NGS Kits Large Fragment Analysis Kits</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Large_Fragment_Analysis_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/large-fragment-analysis-kits-365703">Large Fragment Analysis Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/genomic-dna-kits-365702">Genomic DNA Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Fragment_Analyzer_RNA_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-rna-analysis-kits/fragment-analyzer-rna-kits-365734">Fragment Analyzer RNA Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Small_RNA_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-rna-analysis-kits/small-rna-kits-365732">Small RNA Kits </a></div></div></div>',
										},
												
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="imgContainer"><img src="images/Teaser_Fragment_Analyzer_software.jpg"></div><div class="txtContainer">The Fragment Analyzer controller software is optimized to acquire data for low- to ultrahigh-throughput laboratories. The easy-to-use multifeatured software interface provides tested methods for nucleic acid molecules. It generates digital data for the quick and easy visual analysis of DNA and RNA size, concentration, and quality. It provides objective DNA and RNA quality metrics and can be used to analyze a wide range of nucleic acids.</div></div>',
										},
												
																					
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Reliable Results for Nucleic Acid Analysis. Agilent 5200, 5300, and 5400 Fragment Analyzer Systems</p><a href="http://www.agilent.com/cs/library/brochures/brochure-reliable-nucleic-acid-sample-analysis-fragment-analyzer-5994-0414en-agilent" target="_blank">http://www.agilent.com/cs/library/brochures/brochure-reliable-nucleic-acid-sample-analysis-fragment-analyzer-5994-0414en-agilent</a></li><li><span class="headingBold">Application notes</span><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions </p><a href="http://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">http://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf</a><p>Comparison of HS Small Fragment Kit and HS NGS Fragment Kit on the Agilent 5200 Fragment Analyzer System</p><a href="http://www.agilent.com/cs/library/applications/application-genomic-dna-analysis-fragment-analyzer-5994-0515en-agilent.pdf" target="_blank">http://www.agilent.com/cs/library/applications/application-genomic-dna-analysis-fragment-analyzer-5994-0515en-agilent.pdf</a><p>Best Sizing Practices with the Agilent 5200 Fragment Analyzer System</p><a href="https://www.agilent.com/cs/library/applications/application-nucleic-acid-fragment-sizing-fragment-analyzer-5994-0585en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-nucleic-acid-fragment-sizing-fragment-analyzer-5994-0585en-agilent.pdf</a><p>Best Quantification Practices with the Agilent 5200 Fragment Analyzer System</p><a href=" https://www.agilent.com/cs/library/applications/application-nucleic-acid-quantification-fragment-analyzer-5994-0513en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-nucleic-acid-quantification-fragment-analyzer-5994-0513en-agilent.pdf</a></li></ul></div>',
										},
								]
							},
					]	
				},
										
				2:{
					workflowName : "Library Preparation & Target Enrichment",
					labImg:"images/Library_Preparation_Lab.svg",
					valueProposition:"Hybrid-capture targeted sequencing provides a more time- and cost-effective NGS approach for investigating SNVs, CNVs, translocations, and other genetic and genomic aberrations. By capturing specific genomic regions, targeted sequencing enriches NGS libraries for your genes of interest. This enables you to identify even rare variants, helping give greater insights into novel gene functions and/or mutations.",
                    agilentOfferings:"Agilent provides a full suite of hybridization capture-based target enrichment NGS products, including library preparation and target enrichment kits, catalog and custom probe sets, sample quality control, and automation platforms. Whether your research needs a catalog NGS panel or a custom design focused on your genes of interest, Agilent has the solutions for you."	,			
					instrumentList :[
							{
								instrumentSubList:[
									{
										intrumentHotspotName:"SureSelect Reagent Kit",
										instrumentTitle:'SureSelect',
										instrumentImg:'images/SureSelect_reagents_kit.png',
										instrumentInfo:"If you need a more personalized approach, you can easily design custom probes for your targets of interest with SureDesign. This free web-based application harnesses the flexibility of our SurePrint oligo manufacturing technology for the creation of NGS panels or probe sets tailored to your needs and/or for cross-validation across multiple applications.",
										tabList :[
												{
													tabName:"Key features ",	
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>NGS Target Enrichment: Create custom SureSelect or HaloPlex target enrichment library designs based on the targets you want to sequence</li><li>Define regions of interest and select probes based on target genes, genomic coordinates, or selection parameters</li><li>Identify potential target candidate sites in the input or selected background</li><li>Download ready to order DNA sequence templates</li><li>Generate high-quality libraries with as little as 10 ng of DNA input from intact or highly fragmented FFPE samples</li><li>The modular design enables prcoessing DNA and RNA samples with a streamlined and parallel workflow using XT HS2 chemistry</li> <li>Use single/duplex molecular barcodes (MBC) to remove false positives and accurately detect variants down to ≤1% variant allele frequency</li><li>MBCs can also improve the accuracy of gene expression profile</li><li>Minimize index hopping with 384 unique dual indexes</li><li>SureSelect Exomes offer superior coverage with excellent overall exonic coverage and enhanced coverage of disease-associated regions annotated in HGMD, OMIM, ClinVar, and ACMG databases</li><li>Minimal NGS experience required to run the Magnis</li><li>SureSelect Cancer All-In-One Assays provide all-in-one profiling of SNVs, indels, CNVs, and translocations relevant to somatic cancer from a single DNA sample of 50 ng or less</li><li>Agilent Community Designs offer NGS panels with the content derived from experts in the respective disciplines.</li></ul></div>',
												},
												
												{
													tabName:"Reagents and Kits",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-custom-ngs-assays-520080" target="_blank">SureSelect Cancer All-In-One Custom NGS Assays: </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Custom_DNA_Target_Enrichment.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-custom-target-enrichment-probes/ngs-custom-target-enrichment-probes-232874" target="_blank">SureSelect Custom DNA Target Enrichment Probes</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Custom_DNA_Target_Enrichment.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-custom-target-enrichment-probes/sureselect-custom-rna-target-enrichment-probes-232875" target="_blank">SureSelect Custom RNA Target Enrichment Probes </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_HS2_DNA_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/dna-seq-reagents-kits-library-preparation-kits/sureselect-xt-hs2-dna-reagent-kit-783974  ">SureSelect XT HS2 DNA Reagent Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/dna-seq-reagents-kits-library-preparation-kits/sureselectxt-low-input-reagent-kits-232858  ">SureSelect XT Low Input Reagent Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_HS2_RNA_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/rna-seq-library-preparation-kits/sureselect-xt-hs2-rna-reagent-kit-1049115">SureSelect XT HS2 RNA Reagent Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-lung-assay-520074" target="_blank">SureSelect Cancer All-In-One Lung Assay  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-custom-ngs-assays-520080" target="_blank">SureSelect Cancer All-In-One Custom NGS Assays </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-solid-tumor-assay-520077" target="_blank"> SureSelect Cancer All-In-One Solid Tumor Assay  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-focused-exome-232869" target="_blank">SureSelect Focused Exome</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-clinical-research-exome-v2-232867" target="_blank">SureSelect Clinical Research Exome V2   </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-human-all-exon-v7-232866" target="_blank">SureSelect Human All Exon </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-non-human-exomes-232868" target="_blank">SureSelect Non-human Exomes  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Oncology_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/agilent-community-designs-for-oncology-research-750982" target="_blank">Agilent Community Designs for Oncology Research     </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Infectious_Disease_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/infectious-disease-research-designs-536208" target="_blank">Agilent Community Designs for Infectious Disease Research   </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Model_Organism_Sequencing.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/model-organism-exome-sequencing-designs-536201" target="_blank"> Agilent Community Designs for Model Organism Sequencing  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Epigenetics_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/designs-for-epigenetics-research-536211" target="_blank"> Agilent Community Designs for Epigenetics   Research   </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Human_Genetics_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/inherited-disease-research-designs-536204" target="_blank"> Agilent Community Designs for Human Genetics  Research </a></div></div></div>',
												},
														
												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureDesign.jpg"></div><div class="txtContainer"><a href="https://earray.chem.agilent.com/suredesign/index.htm?sessiontimeout=true">SureDesign</a> </div></div></div>',
												},
														
												{
													tabName:"Videos",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Custom_Genomics_Overview.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/agilent-custom-genomics-overview" target="_blank">Agilent Custom Genomics Overview</a> </div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XTHS2_DNA_Reagent_Kit_webinar.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/sureselect-xths2-dna-kit-webinar" target="_blank">SureSelect XT HS2 DNA Reagent Kit webinar </a></div></div><div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XTHS2_RNA_Reagent_Kit_webinar.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/sureselect-xt-hs2-rna-kit-eseminar" target="_blank">SureSelect XT HS2 RNA Reagent Kit webinar</a> </div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Glasgow_Cancer_Core_Panel_Webinar.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/glasgow-cancer-core-panel-webinar" target="_blank">Glasgow Cancer Core Panel Webinar</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Automating_SureSelect_NGS_workflow.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/automating-the-sureselect-ngs-workflow" target="_blank">Automating the SureSelect NGS workflow </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_and_4150_TapeStation.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-4150-tapestation-video" target="_blank"> Disease gene identification by exome sequencing</a></div></div></div>',
												},
														
												{
													tabName:"Literature",
													tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyers</span><p>SureDesign Custom Portal</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf </a><p>Agilent NGS Design Testing Service</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf</a><p>Agilent Community Design Oncology Research NGS Panels flyer</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-genomics-glasgow-panel-5994-1477en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-genomics-glasgow-panel-5994-1477en-agilent.pdf</a><p>Agilent Community Designs for Infectious Disease Research </p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ACD-coronavirus-5994-2154EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-ACD-coronavirus-5994-2154EN-agilent.pdf</a><p>Agilent Community Design Infectious Disease Pathogen NGS Panels</p><a href="https://www.agilent.com/cs/library/flyers/public/ACD%20Pathogen%20Infectious%20Disease%20Flyer_2.4.pdf?elqTrackId=8af96419240e4b7ab41bb65abd909623&elqaid=2533&elqat=2" target="_blank">https://www.agilent.com/cs/library/flyers/public/ACD%20Pathogen%20Infectious%20Disease%20Flyer_2.4.pdf?elqTrackId=8af96419240e4b7ab41bb65abd909623&elqaid=2533&elqat=2</a><p>Agilent Community Designs for Model Organism Exome</p><a href="https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Model%20Organism%20Flyer%205994-1441EN%201.4.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Model%20Organism%20Flyer%205994-1441EN%201.4.pdf</a><p>Agilent Community Design Epigenetic Research Panels</p><a href="https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Methyl%20Seq%20Flyer%205994-1440EN%201.3.pdf">https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Methyl%20Seq%20Flyer%205994-1440EN%201.3.pdf</a></li><li><span class="headingBold">Data Sheets</span><p>SureSelect XT HS2 DNA Reagent Kit data sheet</p><a href="https://www.agilent.com/cs/library/datasheets/public/XT-HS2-Datasheet-5994-1687EN-1-5.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/XT-HS2-Datasheet-5994-1687EN-1-5.pdf</a><p>SureSelect XT HS2 RNA Reagent Kit</p><a href="https://www.agilent.com/cs/library/datasheets/public/datasheet-sureselect-xt-hs2-RNA-reagent-kit-5994-2314EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/datasheet-sureselect-xt-hs2-RNA-reagent-kit-5994-2314EN-agilent.pdf</a><p>SureSelect Cancer All-In-One Lung Assay</p><a href="https://www.agilent.com/cs/library/datasheets/public/5994-0231EN.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/5994-0231EN.pdf</a><p>SureSelect All-in-One Tumor Assay</p><a href="https://www.agilent.com/cs/library/datasheets/public/AIO-Solid-Tumor-Datasheet-5994-1005EN-1_6.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/AIO-Solid-Tumor-Datasheet-5994-1005EN-1_6.pdf</a></li><li><span class="headingBold">Application Note</span><p>Optimizing the Human Whole Exome Sequencing Process</p><a href="https://www.agilent.com/cs/library/applications/5994-0667EN.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-0667EN.pdf</a></li><li><span class="headingBold">Brochures</span><p>SureSelect V7</p><a href="https://www.agilent.com/en/promotions/sureselect-human-all-exon-v7-form" target="_blank">https://www.agilent.com/en/promotions/sureselect-human-all-exon-v7-form</a><p>Innovation Powered by You brochure</p><a href="https://www.agilent.com/cs/library/brochures/Agilent_Community_Designs_Solutions_Brochure_CPOD_59940890EN.pdf">https://www.agilent.com/cs/library/brochures/Agilent_Community_Designs_Solutions_Brochure_CPOD_59940890EN.pdf</a><p>SureSelect Cancer All-In-One Custom and Catalog NGS Assays brochure </p><a href="https://www.agilent.com/cs/library/brochures/NGS%20SureSelect%20Cancer%20All-In-One%20Brochure%205994-0668EN%204.8%20(single%20pages).pdf" target="_blank">https://www.agilent.com/cs/library/brochures/NGS%20SureSelect%20Cancer%20All-In-One%20Brochure%205994-0668EN%204.8%20(single%20pages).pdf</a></li></ul></div>',
												},
										]
									},
								],
							},  
							
							{
								intrumentHotspotName:'SureDesign',
								instrumentTitle:'SureDesign',
								instrumentImg:'images/SureSelect_reagents_kit.png',
								instrumentInfo:"SureDesign is a web-based application that harnesses the flexibility of SurePrint oligo manufacturing technology for the creation of custom NGS target enrichment libraries, CGH microarray designs, and FISH probes. SureDesign, free to all registered users, has an intuitive design wizard that creates custom panels specific to research needs, as well as for cross-validation using multiple applications. ",
								tabList :[
									{
										tabName:"Key features",	
										tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>NGS Target Enrichment: Create custom SureSelect or HaloPlex target enrichment library designs based on the targets you want to sequence</li><li>Define regions of interest and select probes based on target genes, genomic coordinates, or selection parameters</li><li>CGH, ChIP-on-chip, DNA Methylation: Create custom CGH designs with various layouts, from 8 x 15 K up to 1 x 1 M</li><li>CRISPR Guide RNAs: Find gRNAs that target CRISPR sites within any sequence</li><li>Identify potential target candidate sites in the input or selected background</li><li>Download ready to order DNA sequence templates</li><li>FISH Probes: Input gene names, accession IDs, or genomic coordinates to create custom break apart, dual fusion or single probes</li><li>Rapidly validate results by creating the same assay on a FISH probe and an array or target enrichment library</li></ul></div>',
									},
									{
										tabName:"Reagents and Kits",
										tabInfo: '<div class="dataContainer"><div class="reagentsContent"></div></div>',
									},
									
									{
										tabName:"Software",
										tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureDesign.jpg"></div><div class="txtContainer"><a href="https://earray.chem.agilent.com/suredesign/index.htm?sessiontimeout=true" target="_blank">SureDesign</a> </div></div></div>',
									},
										
									{
										tabName:"Videos",
										tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Custom_Genomics_Overview.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/agilent-custom-genomics-overview" target="_blank">Agilent Custom Genomics Overview</a> </div></div></div>',
									},
											
									{
										tabName:"Literature",
										tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyers</span><p>Agilent NGS Design Testing Service</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf" target="_blank"> https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf</a><p>SureDesign Custom Portal Flyer</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf</a></li></ul></div>',
									},
								]
							},
							
							{
								intrumentHotspotName:'Magnis NGS Prep System',
								instrumentTitle:'Magnis NGS Prep System',
								instrumentImg:'images/Magnis_NGS_Prep_system.png',
								instrumentInfo:"The Magnis system provides a fully automated NGS library preparation platform that makes it easy to assay multiple genes and/or complex genetic aberrations with high reproducibility. Its walk-away automation reduces your <br>hands-on time to as little as five minutes for library preparation and target enrichment of up to eight samples, giving you more consistent data faster and shortening your time to results (and publications).",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Minimal NGS experience required to run the Magnis</li><li>Batching flexibility enable urgent patient samples to be processed overnight to meet desired turnaround time</li><li>Scalable, walk-away automation ideal for low-to-medium-throughput labs</li><li>Efficient workflows let you save time and focus on data analysis rather than hands-on time in the lab</li><li>Validated, ready-to-use protocols that are pre-optimized with SureSelect reagents</li><li>Seamless integration with Agilent NGS workflow solutions for sample preparation, QC, data analysis, and clinical interpretation</li><li>When combined with the Agilent 4150 TapeStation System, the Magnis system provides quality control of the sample throughout the workflow</li></li></ul></div>',
										},
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_SureSelect_XT_HS_Reagents.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-automation-platforms/magnis-sureselect-xths-reagents-456506" target="_blank">Magnis SureSelect XT HS Reagents</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/hybridization-based-next-generation-sequencing-(ngs)/ngs-custom-target-enrichment-probes/sureselect-cancer-all-in-one-custom-ngs-assay-282156" target="_blank">SureSelect Cancer All-In-One Custom NGS Assay</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/hybridization-based-next-generation-sequencing-(ngs)/dna-seq-reagents-kits-library-preparation-kits/sureselectxt-hs-reagent-kits-232857" target="_blank">SureSelectXT HS Reagent Kits</a></div></div></div>',
										},
										
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_Software_Download_Version1.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/magnis-software-download-page?productURL=https%3A%2F%2Fwww.agilent.com%2Fen%2Fproduct%2Fnext-generation-sequencing%2Fhybridization-based-next-generation-sequencing-ngs%2Fngs-automation-platforms%2Fmagnis-ngs-prep-system-291083" target="_blank">Magnis Software Download Version 1.1.1 </a></div></div></div>',
										},
										
										{
											tabName:"Videos",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_Complete_System_for_NGS_Library_Preparation.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-complete-system-for-ngs-library-preparation" target="_blank">Magnis: Complete System for NGS Library PreparationProf. Marchetti, E-Seminar Video</a></div></div></div>',
										},
										
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application notes</span><p>Bridging the Efficiency and Throughput Gap with Magnis Automated NGS Library Preparation Solution:</p><a href="https://www.agilent.com/cs/library/applications/application-bridging-efficiency-gap-magnis-5994-2457EN-agilent.pdf" target="_blank"> https://www.agilent.com/cs/library/applications/application-bridging-efficiency-gap-magnis-5994-2457EN-agilent.pdf</a><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions:</p><a href="https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf </a></li><li><span class="headingBold">Brochure</span><p>Your labs automated library preparation solution for next-generation sequencing:</p><a href="https://www.agilent.com/cs/library/brochures/Magnis%20System%20Brochure%205994-0661EN.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/Magnis%20System%20Brochure%205994-0661EN.pdf </a></li><li><span class="headingBold">Data Sheet</span><p>Agilent Magnis NGS Prep System</p><a href="https://www.agilent.com/cs/library/datasheets/public/Magnis%20NGS%20Prep%20System%20Datasheet%205994-1624EN.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/Magnis%20NGS%20Prep%20System%20Datasheet%205994-1624EN.pdf </a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:'Agilent Bravo NGS System',
								instrumentTitle:'Agilent Bravo NGS System',
								instrumentImg:'images/Bravo_NGS.png',
								instrumentInfo:"The Agilent Bravo NGS system is an automated liquid handling platform for genetics labs that require more versatility and high throughput. This system features Pre-configured hardware and protocols for your routine genomics workflows, but provides the flexibility for advanced users to develop and automate in-house protocols, so you can spend less time generating results and more time analyzing them.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Quickly automate with ready-to-use protocols and pre-developed methods for Agilent SureSelect, Agilent HaloPlex, Illumina TruSeq, NuGEN Ovation, KAPA HTP, PacBio SMRTbell, NEBNext, and more</li><li>Easy to use interface requires no programming expertise to run your automated methods</li><li>Consistent data quality allows you to increase your throughput, with consistent results every time</li><li>Prepare up to ten times more samples in the same time</li><li>Open platform allows you to automate more NGS or genomics methods with confidence</li></ul></div>',
										},
										
																						
										{
											tabName:"Videos",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Bravo_Automated_Sample_Preparation.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/video/automated-sample-prep-bravo-portfolio" target="_blank">Agilent Bravo Automated Sample Preparation</a></div></div></div>',
										},
												
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyer</span><p>AUTOMATION SOLUTIONS: Easy to use, ready protocols for Automated NGS sample preparation</p><a href="https://www.agilent.com/cs/library/flyers/public/5991-2439EN.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/5991-2439EN.pdf</a></li><li><span class="headingBold">Brochure</span><p>Agilent Automation Solutions Portfolio</p><a href="https://www.agilent.com/cs/library/brochures/5991-2469EN_lores.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/5991-2469EN_lores.pdf </a></li><li><span class="headingBold">Application Note</span><p>Automation of the Lexogen QuantSeq 3 mRNA Kit on the Agilent NGS Workstation</p><a href="https://www.agilent.com/cs/library/applications/5991-8601EN_Auto_NGS_Application.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5991-8601EN_Auto_NGS_Application.pdf</a></li></ul></div>',
										},
								]
							}, 
					]
				},
										
				3:{
					workflowName : "Data Analysis & Reporting",
					labImg:"images/Data_Analysis_lab.svg",
					valueProposition:"Alissa Clinical Informatics is your universal platform for secondary and tertiary analysis in molecular pathology, clinical genetics, and translational research. Streamline your data analysis and variant interpretation with end-to-end support from raw data to clinical report.",
                    
					instrumentList :[
							{
								intrumentHotspotName:'SLIMS',
								instrumentTitle:'SLIMS',
								instrumentImg:'images/SLIMS_instrument.png',
								instrumentInfo:"SLIMS combines the best of a LIMS and ELN to visually track samples through complex NGS workflows. You can design NGS plates through batch processing or with drag-and-drop functionality, track external barcodes, assign indexes on a plate layout, or generate libraries.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul><li>Assign lanes and pool libraries by drag and drop with automatic index ambiguity checks</li><li>Integrate with protocols and external analysis platforms to completely support your workflows</li><li>Drag and drop NGS plates with the user-friendly interface, and assign library barcodes with the click of a button</li><li> Analyze NGS data with Galaxy and Gene Pattern hooked into one platform to reduce manual effort</li><li>Export sample sheets and plate design, and manage sequencing of MiSeq, HiSeq, and NovaSeq files within the same interface</li></ul></div>',
										},
												
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/SLIMS_software.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/software-informatics/lab-workflow-management-software/slims">Link to SLIMS page</a></div></div></div>',
										},
												
																						
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Brochure</span><p>Agilent SLIMS</p><a href="https://www.agilent.com/cs/library/brochures/brochure-slims-5994-1578en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-slims-5994-1578en-agilent.pdf</a></li></ul></div>',
										},
								]
							},
							{
								instrumentSubList:[
									{
										intrumentHotspotName:"Alissa Clinical Informatics",
										instrumentTitle:'Alissa Secondary Analysis',
										instrumentImg:'images/Alissa_clinical_information.png',
										instrumentInfo:" Unlock true value from your raw sequencing data with Alissa Informatics secondary analysis solutions." ,
										
										tabList :[
												{
													tabName:"Key features",	
													tabInfo: '<div class="dataContainer"><ul><li>Scalable NGS secondary data analysis solution</li><li>Optimized algorithms to detect SNPs/Indels and CNVs</li><li>Superior visualization tools to aid reviewing called variants in context</li><li>Integrated QC to inform confidence in assay results</li><li>Seamless integration with Alissa Interpret for clinical-grade variant assessment and reports, reducing workflow complexity and time from FASTQ to report</li></ul></div>',
													
												},
												
																								
												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/teaser_align_call.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/next-generation-sequencing/clinical-informatics-platform/alissa-align-call-930087" target="_blank">Alissa Align & Call</a></div></div></div>',
													
												},
														
												
												{
													tabName:"Literature",
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li><span class="headingBold">Application Note</span><p>Analysis of OneSeq on Alissa Clinical Informatics Platform </p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a><p>Alissa Interpret AMP Battle of Pipelines</p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a></li><li><span class="headingBold">Brochure</span><p>Molecular Pathology: Genoptic</p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a></li></ul></div>',
												},
										]
									},
									
									{
										intrumentHotspotName:'Alissa Interpret',
										instrumentTitle:'Alissa Interpret',
										instrumentImg:'images/Alissa_clinical_information.png',
										instrumentInfo:"Your data has given you numerous variants, but which ones are important—or have already been reported? Alissa Interpret gives you a web-based informatics solution that lets you rapidly triage, curate, and report the genomic variants that are most likely to be driving novel biological functions.",
										disclaimer:true,
										disclaimerTxt:"Disclaimer: Alissa Interpret is a USA Class I Exempt Medical Device, Europe CE IVD, Canada, and Australia Class I IVD Device.",
										tabList :[
												{
													tabName:"Key features",	
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>Cloud-based SaaS solution to find the variant in the haystack</li><li>Community-driven and premium third-party knowledge bases, including HGMD</li><li>Trio analysis and variant filtration based on modes of inheritance</li><li>Visualization and interpretation of SNPs, indels, CNVs, LOH, and translocations/fusion genes</li><li>Agnostic solution for small panels to exomes and whole genomes with compatibility to support any design, sequencer, or assay</li></ul></div>',
												},
												
													
												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/teaser_alissa_interpret.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/next-generation-sequencing/clinical-informatics-platform/alissa-interpret-930086" target="_blank">Link to Alissa Interpret </a></div></div></div>',
												},
														
																								
												{
													tabName:"Literature",
													tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Case study</span><p>Combined analysis of CNVs and SNVs in genomic diagnostics</p><a href="https://www.agilent.com/cs/library/casestudies/public/5991-9111EN_AlissaInterpret_CS_UMCUtrecht_20190903.pdf" target="_blank">https://www.agilent.com/cs/library/casestudies/public/5991-9111EN_AlissaInterpret_CS_UMCUtrecht_20190903.pdf</a><p>Implementing ACMG guidelines on sequence variant interpretation</p><a href="https://www.agilent.com/cs/library/casestudies/public/5991-8532EN_AlissaInterpret_CS_ACMG_20190903.pdf" target="_blank">https://www.agilent.com/cs/library/casestudies/public/5991-8532EN_AlissaInterpret_CS_ACMG_20190903.pdf</a><p>An efficient clinical pipeline</p><a href="https://www.agilent.com/cs/library/casestudies/public/5991-8530EN_AlissaInterpret_CS_%20Hopital%20Robert-Debre_20190903.pdf" target="_blank">https://www.agilent.com/cs/library/casestudies/public/5991-8530EN_AlissaInterpret_CS_%20Hopital%20Robert-Debre_20190903.pdf</a></li></ul></div>',
												},
										]
									},
									
									
								
								]
							}
					]
				},
			}
		},
		
		3:{
			personaName:"Clinical Cancer <br>Researcher",
			personaIcon:"images/Clinical_Cancer_Researcher_icon.png",
			bgColor:"#CE0F69",
			personaBand:"images/band_magenta.png",
			personaDescription:"I work in a translational research lab, where I design experiments to uncover novel biology in cancer specimens. My main goal is to publish findings in scientific journals that will one day translate into the clinic or to uncover novel biology that will lead to a new drug.",
			workflowList:{
				1:{
					workflowName : "Sample Quality Control (QC)",
					labImg:"images/Sample_QC_lab.svg",
                    valueProposition:"Sample quality control throughout the library preparation process helps generate more reproducible data by identifying samples that are of insufficient quality and/or quantity to yield successful sequence data. Sample QC helps ensure your cancer variants are accurate—not artifacts—and lets you save resources while shortening your time to results.",		
					agilentOfferings:"The Agilent automated electrophoresis portfolio offers several instruments for QC analysis of nucleic acids, including the Agilent 2100 Bioanalyzer system, Agilent Fragment Analyzer systems, Agilent TapeStation systems, and the Agilent Femto Pulse system.",		
					instrumentList :[
							{
								intrumentHotspotName:"Agilent Bioanalyzer System",
								instrumentTitle:'Agilent Bioanalyzer System',
								instrumentImg:'images/Bioanalyzer_system.png',
								instrumentInfo:"The Agilent 2100 Bioanalyzer system is an established automated electrophoresis solution for the sample quality control of biomolecules. The system integrates an instrument, data processing software, reagents, and a microfluidic chip specific for DNA, RNA, or protein analysis. It is suitable for <br>next-generation sequencing (NGS), gene expression, biopharmaceutical, and genome editing workflows, delivering highly precise analytical evaluation of various sample types. Advantages of microfluidics-based automated electrophoresis over traditional gel electrophoresis include dramatically reduced sample (1 µL for nucleic acids, 4 µL for proteins) and reagent consumption, significantly faster analysis time, and less hands-on activities during sample preparation and data analysis. The Agilent 2100 Bioanalyzer system is ideal for the scientist requiring a versatile instrument for nucleic acids and protein electrophoresis analysis with moderately low throughput (10-12 samples) needs.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Replaceable electrode cartridges that can be easily exchanged for contamination-free switching between methods</li><li>The system features minimum exposure to hazardous materials to ensure operator safety</li><li> The 2100 Bioanalyzer instrument is compliant with European RoHS directives</li><li> For GLP/GMP environments, the 2100 Bioanalyzer system offers IQ and OQ services, as well as features to enable 21 Cf Part 11 compliance</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_DNA_kits.png"></div><div class="txtContainer">Bioanalyzer DNA kits provide microfluidic chips, reagents, and consumables needed to run DNA sample assays with your Agilent 2100 Bioanalyzer instrument.</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_RNA_kits.png"></div><div class="txtContainer">Bioanalyzer RNA kits provide microfluidic chips, reagents, and consumables needed to run RNA sample assays with your Agilent 2100 Bioanalyzer instrument.</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_Protein250_kits.png"></div><div class="txtContainer">Bioanalyzer protein kits provide microfluidic chips, reagents, and consumables needed to run assays with your Agilent 2100 Bioanalyzer instrument to determine protein concentration, characterization, and purity.</div></div></div>',
										},
										
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_Software_plant_rna_nano.png"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/automated-electrophoresis/bioanalyzer-systems/bioanalyzer-software" target="_blank">The 2100 Expert Software for Bioanalyzer offers powerful data analysis tools for all available assays, allowing you to get the most out of your Bioanalyzer system.	</a></div></div></div>',
										},
																				
										
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application Notes</span><p>Quality Control of NGS Libraries with Daisy Chain Molecules</p><a href="https://www.agilent.com/cs/library/applications/application-QC-NGS-daisy-chain-5994-2233EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-QC-NGS-daisy-chain-5994-2233EN-agilent.pdf</a></li><li><span class="headingBold">Brochure</span><p>Secure Experimental Success</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-protein-sample-control-2100-bioanalyzer-5994-0088EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-protein-sample-control-2100-bioanalyzer-5994-0088EN-agilent.pdf</a></li><li><span class="headingBold">Application Compendium</span><p>Applications for DNA, RNA, and Protein Analysis</p><a href="https://www.agilent.com/cs/library/applications/5991-8974EN_Bioanalyzer-TapeStation_appcompendium.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5991-8974EN_Bioanalyzer-TapeStation_appcompendium.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:'<div class="hotspotInfo">Agilent 4150 TapeStation System<ul><li>Economic, entry-level system</li><li>Analysis of up to 16 DNA or RNA samples</li></ul></div>',
								instrumentTitle:'Agilent 4150 TapeStation System',
								instrumentImg:'images/4150_tapestation.png',
								instrumentInfo:"The TapeStation systems are all-in-one platforms that provide end-to-end automated DNA and RNA sample QC for your genomics analyses. No matter your starting sample type and throughput needs, the TapeStation system can match them with accurate and precise ScreenTape devices built for your specific starting sample types and low-, medium-, and high-throughput configuration options.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>High sensitivity assays enable the analysis of precious and low concentrated RNA and DNA samples down to pg/ul sensitivity</li><li>Results are obtained quickly; in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples</li><liUp to 96 samples can be analyzed automatically with constant cost-per-sample providing scalable throughput</li><li>Integrity standards for RNA and DNA provide reproducible and objective sample integrity analysis</li><li>Easily achieve GLP/GMP compliance by IQ and OQ services for the TapeStation system.</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity RNA ScreenTape Assay</div></div>',
										},
												
																						
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:'<div class="hotspotInfo">Agilent 4200 TapeStation System<ul><li>Walk-away automation in a benchtop system </li><li> Analyse up to 96 DNA or RNA samples</li></ul></div>',
								instrumentTitle:'Agilent 4200 TapeStation System',
								instrumentImg:'images/4200_tapestation.png',
								instrumentInfo:"The TapeStation systems are all-in-one platforms that provide end-to-end automated DNA and RNA sample QC for your genomics analyses. No matter your starting sample type and throughput needs, the TapeStation system can match them with accurate and precise ScreenTape devices built for your specific starting sample types and low-, medium-, and high-throughput configuration options.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>High sensitivity assays enable the analysis of precious and low concentrated RNA and DNA samples down to pg/ul sensitivity</li><li>Results are obtained quickly; in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples</li><liUp to 96 samples can be analyzed automatically with constant cost-per-sample providing scalable throughput</li><li>Integrity standards for RNA and DNA provide reproducible and objective sample integrity analysis</li><li>Easily achieve GLP/GMP compliance by IQ and OQ services for the TapeStation system</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity RNA ScreenTape Assay</div></div>',
										},
												
																						
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:'ScreenTape Products',
								instrumentTitle:'ScreenTape Products',
								instrumentImg:'images/screentape.png',
								instrumentInfo:"The TapeStation systems are all-in-one platforms that provide end-to-end automated DNA and RNA sample QC for your genomics analyses. No matter your starting sample type and throughput needs, the TapeStation system can match them with accurate and precise ScreenTape devices built for your specific starting sample types and low-, medium-, and high-throughput configuration options.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>High sensitivity assays enable the analysis of precious and low concentrated RNA and DNA samples down to pg/ul sensitivity</li><li>Results are obtained quickly; in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples</li><liUp to 96 samples can be analyzed automatically with constant cost-per-sample providing scalable throughput</li><li>Integrity standards for RNA and DNA provide reproducible and objective sample integrity analysis</li><li>Easily achieve GLP/GMP compliance by IQ and OQ services for the TapeStation system</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High Sensitivity RNA ScreenTape Assay</div></div>',
										},
												
																						
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul> <li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
										},
								]
							},
							{
								intrumentHotspotName:'Femto Pulse System',
								instrumentTitle:'Femto Pulse System',
								instrumentImg:'images/Femto_pulse.png',
								instrumentInfo:"The Femto Pulse System is a unique, automated sample QC platform that requires only femtogram-quantity inputs of DNA and RNA, allowing you to conserve precious samples such as circulating tumor (ctDNA) and cell-free DNA (ctDNA). It provides unparalleled sensitivity and resolution of even high-molecular-weight fragment up to 165 kb in size in about 90 minutes. The Femto Pulse system is ideal for NGS applications (including long-read NGS) and sample QC of cfDNA and ctDNA from liquid biopsies, genomic and hmwDNA, total and messenger RNA, and BAC library digests.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>Large Fragment Resolution - Separate high molecular weight DNA smears and fragments through 165 kb</li><li>Reduced Separation Time - Analyze your samples in about 1.5 hours</li><li>High Analytical Sensitivity - Achieve 10 times higher sensitivity for nucleic acid smears and up to 100 times higher for nucleic acid fragments</li><li>Simple Sample Preparation - Minimize sample degradation with fewer pipetting steps and stable reagents</li><li>Powerful Analysis Software - One intuitive software program automates analysis of diverse sample types</li><li>Conserve Precious Sample - Unparalleled sensitivity allows you to use less precious sample and achieve superior detection</li><li>Make Workflows More Efficient - Eliminate pulsed-field gel electrophoresis from long-read NGS library preparation and BAC analysis</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
									        tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Ultra_Sensitivity_NGS_Kit.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-dna-analysis-kits/ultra-sensitivity-ngs-kit-365740" target="_blank">Ultra Sensitivity NGS Kit</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_165kb_Kit.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-dna-analysis-kits/genomic-dna-165-kb-kit-365739" target="_blank">Genomic DNA 165 kb Kit </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Ultra_Sensitivity_RNA_Kit.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-rna-analysis-kits/ultra-sensitivity-rna-kit-365761" target="_blank">Ultra Sensitivity RNA Kit</a></div></div></div>',
										},
												
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Femto_Pulse_software.jpg"></div><div class="txtContainer">The powerful and intuitive Femto Pulse instrument controller software is optimized for acquiring data generated during pulsed-field electrophoresis runs. The multifeatured user interface is easy to use and versatile. It offers validated methods for consistent electrokinetic injections and voltage separations of nucleic acid samples.</div></div></div>',
										},
												
										{
											tabName:"Literature",
											tabInfo:'<div id="featuresContent" class="dataContainer"><ul><li><span class="headingBold">Brochure</span><p>Fast Separation, Ultra Sensitivity, One Instrument - Agilent Femto Pulse System</p><a href="  https://www.agilent.com/cs/library/brochures/brochure-fast-separation-ultra-sensitivity-one-instrument-femto-pulse-5994-0410en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-fast-separation-ultra-sensitivity-one-instrument-femto-pulse-5994-0410en-agilent.pdf</a></li><li><span class="headingBold">Application notes</span><p>Genomic DNA Handling and the Agilent Femto Pulse System</p><a href="https://www.agilent.com/cs/library/applications/application-gDNA-handling-Femto-Pulse-5994-2723en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-gDNA-handling-Femto-Pulse-5994-2723en-agilent.pdf</a><p>cfDNA Separated on the Agilent Femto Pulse System</p><a href="https://www.agilent.com/cs/library/applications/application-cfdna-separation-fempto-pulse-5994-0514en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-cfdna-separation-fempto-pulse-5994-0514en-agilent.pdf</a><p>Genomic DNA Sizing and Quality Control on the Agilent Femto Pulse System </p><a href=" https://www.agilent.com/cs/library/applications/application-genomic-dna-sizing-quality-femto-pulse-5994-0516en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-genomic-dna-sizing-quality-femto-pulse-5994-0516en-agilent.pdf</a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:'Fragment Analyzer System',
								instrumentTitle:'Fragment Analyzer System',
								instrumentImg:'images/Fregment_analyzer.png',
								instrumentInfo:"The Fragment Analyzer System helps eliminate NGS library prep bottlenecks by allowing automated sample QC of DNA or RNA samples. It features a broad range of sample types (including gDNA, small, and total RNA, hmwDNA, and cfDNA) and different capillary lengths let you obtain a perfect mix of speed and resolution. This versatility allows you to tailor and optimize your sample QC to your specific NGS workflows, particularly for challenging sample types such as cfDNA, ctDNA, and/or samples derived from formalin-fixed paraffin-embedded (FFPE) tissues.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul> <li>Separate 12 samples in parallel in as little as 15 minutes</li><li>Choose between three different capillary array lengths for the required blend of speed or resolution</li><li>Minimize instrument preparation time with no daily array handling requirements and room-temperature stable reagents</li><li>See clear results with separation resolution as good as 3 bp from fragments under 300 bp</li><li>Improve lab efficiency by loading and programming samples while separation is currently running</li><li>Move samples up or down in queue to adjust run priorities</li><li>Use quality metrics for RNA      (RQN) and genomic DNA (GQN) to remove subjective quality assessments</li><li>Kits provide a wide dynamic range covering two orders of magnitude</li><li>Achieve accurate molarity calculations with reliable smear analysis</li></ul></div>',
										},
										
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Small_fragment_and_NGS_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/small-fragment-ngs-kits-365701" target="_blank">Small Fragment and NGS Kits Large Fragment Analysis Kits</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Large_Fragment_Analysis_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/large-fragment-analysis-kits-365703" target="_blank">Large Fragment Analysis Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/genomic-dna-kits-365702" target="_blank">Genomic DNA Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Fragment_Analyzer_RNA_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-rna-analysis-kits/fragment-analyzer-rna-kits-365734" target="_blank">Fragment Analyzer RNA Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Small_RNA_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-rna-analysis-kits/small-rna-kits-365732" target="_blank">Small RNA Kits </a></div></div></div>',
										},
												
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Fragment_Analyzer_software.jpg"></div><div class="txtContainer">The Fragment Analyzer controller software is optimized to acquire data for low- to ultrahigh-throughput laboratories. The easy-to-use multifeatured software interface provides tested methods for nucleic acid molecules.It generates digital data for the quick and easy visual analysis of DNA and RNA size, concentration, and quality. It provides objective DNA and RNA quality metrics and can be used to analyze a wide range of nucleic acids.</div></div></div>',
										},
												
																					
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Brochure</span><p>Reliable Results for Nucleic Acid Analysis</p><a href="http://www.agilent.com/cs/library/brochures/brochure-reliable-nucleic-acid-sample-analysis-fragment-analyzer-5994-0414en-agilent.pdf" target="_blank">http://www.agilent.com/cs/library/brochures/brochure-reliable-nucleic-acid-sample-analysis-fragment-analyzer-5994-0414en-agilent.pdf</a></li><li><span class="headingBold">Application notes</span><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions</p><a href="http://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">http://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf</a><p>Comparison of HS Small Fragment Kit and HS NGS Fragment Kit on the Agilent 5200 Fragment Analyzer System</p><a href="http://www.agilent.com/cs/library/applications/application-genomic-dna-analysis-fragment-analyzer-5994-0515en-agilent.pdf" target="_blank">http://www.agilent.com/cs/library/applications/application-genomic-dna-analysis-fragment-analyzer-5994-0515en-agilent.pdf</a><p>Best Sizing Practices with the Agilent 5200 Fragment Analyzer System</p><a href="https://www.agilent.com/cs/library/applications/application-nucleic-acid-fragment-sizing-fragment-analyzer-5994-0585en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-nucleic-acid-fragment-sizing-fragment-analyzer-5994-0585en-agilent.pdf</a><p>Best Quantification Practices with the Agilent 5200 Fragment Analyzer System</p><a href="https://www.agilent.com/cs/library/applications/application-nucleic-acid-quantification-fragment-analyzer-5994-0513en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-nucleic-acid-quantification-fragment-analyzer-5994-0513en-agilent.pdf</a></li></ul></div>',
										},
								]
							},
					]	
				},
										
				2:{
					
					workflowName : "Library Preparation & Target Enrichment",
					labImg:"images/Library_Preparation_Lab.svg",
					valueProposition:"Hybrid-capture targeted sequencing provides a more time- and cost-effective NGS approach for investigating cancer-associated genetic and genomic aberrations. Targeted sequencing uses probes to capture and enrich NGS libraries for specific regions of the genome, enabling you focus your reads on your targets of interest and help identify rare variants (such as subclonal mutations) that other methods may miss. Hybrid capture sequencing is sensitive and suited for detecting single nucleotide variants, translocations, insertions and deletions, structural variants, and copy number variations that can give insights into novel function and/or mutations in drug target genes.",													
                    agilentOfferings:"Agilent provides a full suite of hybridization capture-based target enrichment NGS products, including library preparation and target enrichment kits, catalog and custom probe sets, sample quality control, and automation platforms. Whether your oncology research needs a catalog NGS panel or a custom design focused on your genes of interest, Agilent has the solutions for you.",				
					instrumentList :[
							{
								instrumentSubList:[
									{
										intrumentHotspotName:'SureSelect Reagent Kit',
										instrumentTitle:'SureSelect',
										instrumentImg:'images/SureSelect_reagents_kit.png',
										instrumentInfo:"If you need a more personalized approach, you can easily design custom probes for your targets of interest with SureDesign. This free web-based application harnesses the flexibility of our SurePrint oligo manufacturing technology for the creation of NGS panels or probe sets tailored to your needs and/or for <br>cross-validation across multiple applications.",
										tabList :[
												{
													tabName:"Key features ",	
													tabInfo: '<div class="dataContainer"><ul><li>NGS Target Enrichment: Create custom SureSelect or HaloPlex target enrichment library designs based on the targets you want to sequence</li><li>Define regions of interest and select probes based on target genes, genomic coordinates, or selection parameters</li><li>Identify potential target candidate sites in the input or selected background</li><li>Download ready to order DNA sequence templates</li><li>Generate high-quality libraries with as little as 10 ng of input from intact or highly fragmented FFPE samples</li><li>The modular design enables prcoessing DNA and RNA samples with a streamlined and parallel workflow using XT HS2 chemistry</li><li>Use single/duplex molecular barcodes (MBC) to remove false positives and accurately detect variants down to ≤1% variant allele frequency</li><li>MBCs can also improve the accuracy of gene expression profile.</li> <li>Minimize index hopping with 384 unique dual indexes</li><li>SureSelect Exomes offer superior coverage with excellent overall exonic coverage and enhanced coverage of diseas-associated regions annotated in HGMD, OMIM, ClinVar, and ACMG databases</li><li> SureSelect Cancer All-In-One Assays provide all-in-one profiling of SNVs, indels, CNVs, and translocations relevant to somatic cancer from a single DNA sample of 50 ng or less </li><li>Agilent Community Designs offer NGS panels with the content derived from experts in the respective disciplines</li></ul></div>',
												},
												
												{
													tabName:"Reagents and Kits",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-custom-ngs-assays-520080">SureSelect Cancer All-In-One Custom NGS Assays</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Custom_DNA_Target_Enrichment.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-custom-target-enrichment-probes/ngs-custom-target-enrichment-probes-232874">SureSelect Custom DNA Target Enrichment Probes</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Custom_DNA_Target_Enrichment.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-custom-target-enrichment-probes/sureselect-custom-rna-target-enrichment-probes-232875">SureSelect Custom RNA Target Enrichment Probes</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_HS2_DNA_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/dna-seq-reagents-kits-library-preparation-kits/sureselect-xt-hs2-dna-reagent-kit-783974  " target="_blank">SureSelect XT HS2 DNA Reagent Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/dna-seq-reagents-kits-library-preparation-kits/sureselectxt-low-input-reagent-kits-232858  " target="_blank">SureSelect XT Low Input Reagent Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_HS2_RNA_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/rna-seq-library-preparation-kits/sureselect-xt-hs2-rna-reagent-kit-1049115" target="_blank">SureSelect XT HS2 RNA Reagent Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-lung-assay-520074" target="_blank">SureSelect Cancer All-In-One Lung Assay  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-custom-ngs-assays-520080" target="_blank">  SureSelect Cancer All-In-One Custom NGS Assays </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-solid-tumor-assay-520077" target="_blank"> SureSelect Cancer All-In-One Solid Tumor Assay  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-focused-exome-232869" target="_blank">SureSelect Focused Exome</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-clinical-research-exome-v2-232867" target="_blank">SureSelect Clinical Research Exome V2   </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-human-all-exon-v7-232866" target="_blank">SureSelect Human All Exon </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-non-human-exomes-232868" target="_blank">SureSelect Non-human Exomes  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Oncology_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/agilent-community-designs-for-oncology-research-750982" target="_blank">Agilent Community Designs for Oncology Research     </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Infectious_Disease_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/infectious-disease-research-designs-536208" target="_blank">Agilent Community Designs for Infectious Disease Research   </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Model_Organism_Sequencing.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/model-organism-exome-sequencing-designs-536201" target="_blank"> Agilent Community Designs for Model Organism Sequencing  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Epigenetics_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/designs-for-epigenetics-research-536211" target="_blank"> Agilent Community Designs for Epigenetics   Research   </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Human_Genetics_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/inherited-disease-research-designs-536204" target="_blank"> Agilent Community Designs for Human Genetics  Research </a></div></div></div>',
												},
														
												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureDesign.jpg"></div><div class="txtContainer"><a href="https://earray.chem.agilent.com/suredesign/index.htm?sessiontimeout=true" target="_blank">SureDesign</a> </div></div></div>',
												},
														
												{
													tabName:"Videos",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Custom_Genomics_Overview.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/agilent-custom-genomics-overview" target="_blank">Agilent Custom Genomics Overview</a> </div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XTHS2_DNA_Reagent_Kit_webinar.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/sureselect-xths2-dna-kit-webinar" target="_blank">SureSelect XT HS2 DNA Reagent Kit Webinar </a></div></div><div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XTHS2_RNA_Reagent_Kit_webinar.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/sureselect-xt-hs2-rna-kit-eseminar" target="_blank">SureSelect XT HS2 RNA Reagent Kit Webinar</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Glasgow_Cancer_Core_Panel_Webinar.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/glasgow-cancer-core-panel-webinar" target="_blank">Glasgow Cancer Core Panel Webinar </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Automating_SureSelect_NGS_workflow.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/automating-the-sureselect-ngs-workflow" target="_blank">Automating the SureSelect NGS workflow </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_and_4150_TapeStation.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-4150-tapestation-video" target="_blank">Disease gene identification by exome sequencing</a></div></div></div>',
												},
														
												{
													tabName:"Literature",
													tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyers</span><p>SureDesign Custom Portal</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf">https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf</a><p>Agilent NGS Design Testing Service</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf">https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf </a><p>Agilent Community Design Oncology Research NGS Panels flyer</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-genomics-glasgow-panel-5994-1477en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-genomics-glasgow-panel-5994-1477en-agilent.pdf</a><p>Agilent Community Designs for Infectious Disease Research </p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ACD-coronavirus-5994-2154EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-ACD-coronavirus-5994-2154EN-agilent.pdf</a><p>Agilent Community Design Infectious Disease Pathogen NGS Panels</p><a href="https://www.agilent.com/cs/library/flyers/public/ACD%20Pathogen%20Infectious%20Disease%20Flyer_2.4.pdf?elqTrackId=8af96419240e4b7ab41bb65abd909623&elqaid=2533&elqat=2" target="_blank">https://www.agilent.com/cs/library/flyers/public/ACD%20Pathogen%20Infectious%20Disease%20Flyer_2.4.pdf?elqTrackId=8af96419240e4b7ab41bb65abd909623&elqaid=2533&elqat=2</a><p>Agilent Community Designs for Model Organism Exome</p><a href="https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Model%20Organism%20Flyer%205994-1441EN%201.4.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Model%20Organism%20Flyer%205994-1441EN%201.4.pdf</a><p>Agilent Community Design Epigenetic Research Panels</p><a href="https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Methyl%20Seq%20Flyer%205994-1440EN%201.3.pdf">https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Methyl%20Seq%20Flyer%205994-1440EN%201.3.pdf</a></li><li><span class="headingBold">Data Sheets</span><p>SureSelect XT HS2 DNA Reagent Kit</p><a href="https://www.agilent.com/cs/library/datasheets/public/XT-HS2-Datasheet-5994-1687EN-1-5.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/XT-HS2-Datasheet-5994-1687EN-1-5.pdf</a><p>SureSelect XT HS2 RNA Reagent Kit</p><a href="https://www.agilent.com/cs/library/datasheets/public/datasheet-sureselect-xt-hs2-RNA-reagent-kit-5994-2314EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/datasheet-sureselect-xt-hs2-RNA-reagent-kit-5994-2314EN-agilent.pdf</a><p>SureSelect Cancer All-In-One Lung Assay</p><a href="https://www.agilent.com/cs/library/datasheets/public/5994-0231EN.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/5994-0231EN.pdf</a><p>SureSelect All-in-One Tumor Assay</p><a href="https://www.agilent.com/cs/library/datasheets/public/AIO-Solid-Tumor-Datasheet-5994-1005EN-1_6.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/AIO-Solid-Tumor-Datasheet-5994-1005EN-1_6.pdf</a> </li><li><span class="headingBold">Application Note</span><p>Optimizing the Human Whole Exome Sequencing Process</p><a href="https://www.agilent.com/cs/library/applications/5994-0667EN.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-0667EN.pdf</a></li><li><span class="headingBold">Brochures</span><p>SureSelect V7</p><a href="https://www.agilent.com/en/promotions/sureselect-human-all-exon-v7-form" target="_blank">https://www.agilent.com/en/promotions/sureselect-human-all-exon-v7-form</a><p>Innovation Powered by You brochure</p><a href="https://www.agilent.com/cs/library/brochures/Agilent_Community_Designs_Solutions_Brochure_CPOD_59940890EN.pdf">https://www.agilent.com/cs/library/brochures/Agilent_Community_Designs_Solutions_Brochure_CPOD_59940890EN.pdf</a><p>SureSelect Cancer All-In-One Custom and Catalog NGS Assays brochure </p><a href="https://www.agilent.com/cs/library/brochures/NGS%20SureSelect%20Cancer%20All-In-One%20Brochure%205994-0668EN%204.8%20(single%20pages).pdf" target="_blank">https://www.agilent.com/cs/library/brochures/NGS%20SureSelect%20Cancer%20All-In-One%20Brochure%205994-0668EN%204.8%20(single%20pages).pdf</a></li></ul></div>',
												},
										]
									},
								],
							},  
							
							{
								intrumentHotspotName:'SureDesign',
								instrumentTitle:'SureDesign',
								instrumentImg:'images/SureSelect_reagents_kit.png',
								instrumentInfo:"SureDesign is a web-based application that harnesses the flexibility of SurePrint oligo manufacturing technology for the creation of custom NGS target enrichment libraries, CGH microarray designs, and FISH probes. SureDesign, free to all registered users, has an intuitive design wizard that creates custom panels specific to research needs, as well as for cross-validation using multiple applications. ",
								tabList :[
									{
										tabName:"Key features",	
										tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>NGS Target Enrichment: Create custom SureSelect or HaloPlex target enrichment library designs based on the targets you want to sequence</li><li>Define regions of interest and select probes based on target genes, genomic coordinates, or selection parameters</li><li>CGH, ChIP-on-chip, DNA Methylation: Create custom CGH designs with various layouts, from 8 x 15 K up to 1 x 1 M</li><li>CRISPR Guide RNAs: Find gRNAs that target CRISPR sites within any sequence</li><li>Identify potential target candidate sites in the input or selected background</li><li>Download ready to order DNA sequence templates</li><li>FISH Probes: Input gene names, accession IDs, or genomic coordinates to create custom break apart, dual fusion or single probes</li><li>Rapidly validate results by creating the same assay on a FISH probe and an array or target enrichment library</li></ul></div>',
									},
									{
										tabName:"Reagents and Kits",
										tabInfo: '<div class="dataContainer"><div class="reagentsContent"></div></div>',
									},
									
									{
										tabName:"Software",
										tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureDesign.jpg"></div><div class="txtContainer"><a href="https://earray.chem.agilent.com/suredesign/index.htm?sessiontimeout=true" target="_blank">SureDesign</a> </div></div></div>',
									},
										
									{
										tabName:"Videos",
										tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Custom_Genomics_Overview.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/agilent-custom-genomics-overview" target="_blank">Agilent Custom Genomics Overview</a> </div></div></div>',
									},
											
									{
										tabName:"Literature",
										tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyers</span><p>Agilent NGS Design Testing Service</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf" target="_blank"> https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf</a><p>SureDesign Custom Portal Flyer</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf</a></li></ul></div>',
									},
								]
							},
							
							{
								intrumentHotspotName:'Magnis NGS Prep System',
								instrumentTitle:'Magnis NGS Prep System',
								instrumentImg:'images/Magnis_NGS_Prep_system.png',
								instrumentInfo:"The Magnis system provides a fully automated NGS library preparation platform that makes it easy to assay multiple genes and/or complex genetic aberrations with high reproducibility. Its walk-away automation reduces <br>your hands-on time to as little as five minutes for library preparation and target enrichment of up to eight samples, giving you more consistent data faster and shortening your time to results (and publications).",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul><li>Minimal NGS experience required to run the Magnis</li><li>No manual documentation of each step, no reagent supply  management of dozens of reagents in the workflow</li><li>Scalable, walk-away automation ideal for low-to-medium-throughput labs</li><li>Efficient workflows let you save time and focus on data analysis rather than hands-on time in the lab</li><li>Validated, ready-to-use protocols that are pre-optimized with SureSelect reagents</li><li>Seamless integration with Agilent NGS workflow solutions for sample preparation, QC, data analysis, and clinical interpretation</li><li>When combined with the Agilent 4150 TapeStation System, the Magnis system provides quality control of the sample throughout the workflow</li></ul></div>',
										},
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_SureSelect_XT_HS_Reagents.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-automation-platforms/magnis-sureselect-xths-reagents-456506" target="_blank">Magnis SureSelect XT HS Reagents</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/hybridization-based-next-generation-sequencing-(ngs)/ngs-custom-target-enrichment-probes/sureselect-cancer-all-in-one-custom-ngs-assay-282156" target="_blank">SureSelect Cancer All-In-One Custom NGS Assay</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/hybridization-based-next-generation-sequencing-(ngs)/dna-seq-reagents-kits-library-preparation-kits/sureselectxt-hs-reagent-kits-232857" target="_blank">SureSelectXT HS Reagent Kits</a></div></div></div>',
										},
										
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_Software_Download_Version1.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/magnis-software-download-page?productURL=https%3A%2F%2Fwww.agilent.com%2Fen%2Fproduct%2Fnext-generation-sequencing%2Fhybridization-based-next-generation-sequencing-ngs%2Fngs-automation-platforms%2Fmagnis-ngs-prep-system-291083" target="_blank">Magnis Software Download Version 1.1.1</div></div></div>',
										},
										
										{
											tabName:"Videos",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_Complete_System_for_NGS_Library_Preparation.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-complete-system-for-ngs-library-preparation" target="_blank">Magnis: Complete System for NGS Library Preparation Prof. Marchetti, E-Seminar Video</a></div></div></div>',
										},
										
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application Notes</span><p>Bridging the Efficiency and Throughput Gap with Magnis Automated NGS Library Preparation Solution</p><a href="https://www.agilent.com/cs/library/applications/application-bridging-efficiency-gap-magnis-5994-2457EN-agilent.pdf" target="_blank"> https://www.agilent.com/cs/library/applications/application-bridging-efficiency-gap-magnis-5994-2457EN-agilent.pdf</a><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions</p><a href="https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf </a></li><li><span class="headingBold">Brochure</span><p>Your labs automated library preparation solution for next-generation sequencing</p><a href="https://www.agilent.com/cs/library/brochures/Magnis%20System%20Brochure%205994-0661EN.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/Magnis%20System%20Brochure%205994-0661EN.pdf </a></li><li><span class="headingBold">Data Sheet</span><p>Agilent Magnis NGS Prep System</p><a href="https://www.agilent.com/cs/library/datasheets/public/Magnis%20NGS%20Prep%20System%20Datasheet%205994-1624EN.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/Magnis%20NGS%20Prep%20System%20Datasheet%205994-1624EN.pdf </a></li></ul></div>',
										},
								]
							},
							
							{
								intrumentHotspotName:'Agilent Bravo NGS System',
								instrumentTitle:'Agilent Bravo NGS System',
								instrumentImg:'images/Bravo_NGS.png',
								instrumentInfo:"The Agilent Bravo NGS system is an automated liquid handling platform for genetics labs that require more versatility and high throughput. This system features Pre-configured hardware and protocols for your routine genomics workflows, but provides the flexibility for advanced users to develop and automate in-house protocols, so you can spend less time generating results and more time analyzing them.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div class="dataContainer"><ul><li>Quickly automate with ready-to-use protocols and pre-developed methods for Agilent SureSelect, Agilent HaloPlex, Illumina TruSeq, NuGEN Ovation, KAPA HTP, PacBio SMRTbell, NEBNext, and more</li><li>Easy-to-use interface requires no programming expertise to run your automated methods</li><li>Consistent data quality allows you to increase your throughput, with consistent results every time</li><li>Prepare up to ten times more samples in the same time</li><li>Open platform allows you to automate more NGS or genomics methods with confidence</li></ul></div>',
										},
										
																						
										{
											tabName:"Videos",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Bravo_Automated_Sample_Preparation.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/video/automated-sample-prep-bravo-portfolio" target="_blank">Agilent Bravo Automated Sample Preparation</a></div></div></div>',
										},
												
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyer</span><p>AUTOMATION SOLUTIONS: Easy to use, ready protocols for Automated NGS sample preparation</p><a href="https://www.agilent.com/cs/library/flyers/public/5991-2439EN.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/5991-2439EN.pdf</a></li><li><span class="headingBold">Brochure</span><p>Agilent Automation Solutions Portfolio</p><a href="https://www.agilent.com/cs/library/brochures/5991-2469EN_lores.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/5991-2469EN_lores.pdf </a></li><li><span class="headingBold">Application Note</span><p>Automation of the Lexogen QuantSeq 3 mRNA Kit on the Agilent NGS Workstation</p><a href="https://www.agilent.com/cs/library/applications/5991-8601EN_Auto_NGS_Application.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5991-8601EN_Auto_NGS_Application.pdf</a></li></ul></div>',
										},
								]
							},
					]
				},
										
				3:{
					workflowName : "Data Analysis & Reporting",
					labImg:"images/Data_Analysis_lab.svg",
					valueProposition:"Analyzing, storing, and reporting cancer-associated variants pose significant challenges for an NGS lab. The Alissa Clinical Informatics suite trivializes it with a universal platform that features a simple workflow, up-to-date knowledge bases, and easy integration with your LIMS or BioIT systems. These solutions streamline your analytical workflows and feature <br>end-to-end support so you can take your cancer findings from raw data to published reports in less time.",
                    
					instrumentList :[
							{
								intrumentHotspotName:'SLIMS',
								instrumentTitle:'SLIMS',
								instrumentImg:'images/SLIMS_instrument.png',
								instrumentInfo:"SLIMS combines the best of a LIMS and ELN to visually track samples through complex NGS workflows. You can design NGS plates through batch processing or with drag-and-drop functionality, track external barcodes, assign indexes on a plate layout, or generate libraries.",
								tabList :[
									{
										tabName:"Key features",	
										tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li>Assign lanes and pool libraries by drag and drop with automatic index ambiguity checks</li><li>Integrate with protocols and external analysis platforms to completely support your workflows</li><li>Drag and drop NGS plates with the user-friendly interface, and assign library barcodes with the click of a button</li><li> Analyze NGS data with Galaxy and Gene Pattern hooked into one platform to reduce manual effort</li><li>Export sample sheets and plate design, and manage sequencing of MiSeq, HiSeq, and NovaSeq files within the same interface</li></ul></div>',
									},

									{
										tabName:"Software",
										tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/SLIMS_software.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/software-informatics/lab-workflow-management-software/slims" target="_blank">Link to SLIMS page</a></div></div></div>',
									},
									
									{
										tabName:"Literature",
										tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Brochure</span><p>Agilent SLIMS</p><a href="https://www.agilent.com/cs/library/brochures/brochure-slims-5994-1578en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-slims-5994-1578en-agilent.pdf</a></li></ul></div>',
									},
								]
							},	
							{
								instrumentSubList:[
									{
										intrumentHotspotName:"Alissa Clinical Informatics",
										instrumentTitle:'Alissa Secondary Analysis',
										instrumentImg:'images/Alissa_clinical_information.png',
										instrumentInfo:" Unlock true value from your raw sequencing data with the Alissa Informatics secondary analysis solution. ", 
										
										tabList :[
												{
													tabName:"Key features",	
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li>Scalable NGS secondary data analysis solution</li><li>Optimized algorithms to detect SNPs/Indels, CNVs, LOH, and Translocations</li><li>Superior visualization tools to aid reviewing called variants in context<li>Integrated QC to inform confidence in assay results</li><li>Seamless integration with Alissa Interpret for clinical-grade variant assessment and reports, reducing workflow complexity and time from FASTQ to report</li></ul></div>',
												},
																							
												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/teaser_align_call.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/next-generation-sequencing/clinical-informatics-platform/alissa-align-call-930087">Link to Align and Call for now </a></div></div></div>',
												},		
												
												{
													tabName:"Literature",
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li><span class="headingBold">Application Note</span><p>Analysis of OneSeq on Alissa Clinical Informatics Platform </p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a><p>Alissa Interpret AMP Battle of Pipelines</p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a></li><li><span class="headingBold">Brochure</span><p>Molecular Pathology: Genoptic</p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a></li></ul></div>',
												},
										]
									},
									
									{
										intrumentHotspotName:'Alissa Interpret',
										instrumentTitle:'Alissa Interpret',
										instrumentImg:'images/Alissa_clinical_information.png',
										instrumentInfo:"Your data will reveal a large number of variants, but which ones will answer your questions—and which ones have already been reported? Alissa Interpret offers you a web-based informatics solution that enables the rapid triage, curation, and reporting of your variants that are most likely to be relevant to cancer biology and/or pathology.",
										disclaimer:true,
										disclaimerTxt:"Disclaimer: Alissa Interpret is a USA Class I Exempt Medical Device, Europe CE IVD, Canada, and Australia Class I IVD Device.",
										tabList :[
												{
													tabName:"Key features",	
													tabInfo: '<div class="dataContainer"><ul><li>Cloud-based SaaS solution to minimize turnaround time from VCF to report</li><li>Community-driven and premium third-party knowledge bases, including JAX-CKB</li><li>Whitebox solution for content management with full traceability, reproducibility, and built-in version control for annotation sources</li><li>Visualization and interpretation of SNPs, indels, CNVs, LOH, and translocations/fusion genes</li><li>Agnostic solution for small panels to exomes and whole genomes with compatibility to support any design, sequencer, or assay</li></ul></div>',
												},
														
												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/teaser_alissa_interpret.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/next-generation-sequencing/clinical-informatics-platform/alissa-interpret-930086" target="_blank">Link to Alissa Interpret </a></div></div></div>',
												},
																										
												{
													tabName:"Literature",
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li><span class="headingBold">White Paper</span><p>Diagnostic Essentials: Clinical-grade Somatic Variant Assessment and Reporting</p><a href="https://www.agilent.com/cs/library/casestudies/public/5991-8534EN_AlissaInterpret_Whitepaper_NGS_20190603.pdf" target="_blank">https://www.agilent.com/cs/library/casestudies/public/5991-8534EN_AlissaInterpret_Whitepaper_NGS_20190603.pdf</a></li><li><span class="headingBold">Case study</span><p>Identifying somatic tumor-only variants</p><a href="https://www.agilent.com/cs/library/casestudies/public/5991-8531EN_AlissaInterpret_CS_Somatic%20Tumors_20190903.pdf" target="_blank">https://www.agilent.com/cs/library/casestudies/public/5991-8531EN_AlissaInterpret_CS_Somatic%20Tumors_20190903.pdf</a></li><li><span class="headingBold">Data Sheet</span><p>Clinical Content Databases at Your Fingertips</p><a href="https://www.agilent.com/cs/library/brochures/Copy%20of%20Alissa%20Interpret%20Datasheet_5991-8498EN.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/Copy%20of%20Alissa%20Interpret%20Datasheet_5991-8498EN.pdf</a></li></ul></div>',
												},
										]
									},										
								]
							},
					]
				},
			}
		},
	},
	
	/************************************ General lab ***************************************/

	workflowList:{
		1:{
			workflowName : "Sample Quality Control (QC)",
			labImg:"images/Sample_QC_lab.svg",
			workflowIcon:"images/Sample_preparation_icon.png",
			bgColor:"#0b436a",
			videoUrl:"https://app.frame.io/reviews/c5bbf614-eb77-4711-aca9-bae2c7eab459/3c1644fa-f692-447f-b758-46d133f6642e",
            valueProposition:"Nucleic acids sample quality control throughout the library preparation process helps generate more reproducible and accurate data by identifying samples that are of insufficient quality and/or quantity to yield successful sequence data. This helps save resources while shortening your time to results—and publications.",		
			agilentOfferings:'<p>The Agilent automated electrophoresis portfolio offers several instruments for QC analysis of nucleic acids, including the AgilentBioanalyzer system, Fragment Analyzer systems, TapeStation systems, and Femto Pulse system.</p>',	

			instrumentList :[
					{
						intrumentHotspotName:"Agilent Bioanalyzer System",
						instrumentTitle:'Agilent Bioanalyzer System',
						instrumentImg:'images/Bioanalyzer_system.png',
						instrumentInfo:"The Agilent 2100 Bioanalyzer system is an established automated electrophoresis solution for the sample quality control of biomolecules. The system integrates an instrument, data processing software, reagents, and a microfluidic chip specific for DNA, RNA, or protein analysis.",
						tabList :[
							{
								tabName:"Key features",	
								tabInfo: '<div class="dataContainer"><ul> <li>Established chip-based system for the objective assessment of sizing, quantitation, integrity and purity from DNA, RNA and proteins</li><li>Referred in many NGS protocols</li><li>Suitable for low throughput</li><li> Minimal sample consumption: Only 1–4 μL of sample required </li><li>Exchangeable electrode cartridge for easy, contamination-free switching between methods </li><li>Services and software to enable 21 CFR Part 11 compliance</li></ul></div>',
							},
										
							{
								tabName:"Reagents and Kits",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_DNA_kits.png"></div><div class="txtContainer">Bioanalyzer DNA kits provide microfluidic chips, reagents, and consumables needed to run DNA sample assays with your Agilent 2100 Bioanalyzer instrument.</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_RNA_kits.png"></div><div class="txtContainer">Bioanalyzer RNA kits provide microfluidic chips, reagents, and consumables needed to run RNA sample assays with your Agilent 2100 Bioanalyzer instrument.</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_Protein250_kits.png"></div><div class="txtContainer">Bioanalyzer protein kits provide microfluidic chips, reagents, and consumables needed to run assays with your Agilent 2100 Bioanalyzer instrument to determine protein concentration, characterization, and purity.</div></div></div>',
							},
										
							{
								tabName:"Software",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Bioanalyzer_Software_plant_rna_nano.png"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/automated-electrophoresis/bioanalyzer-systems/bioanalyzer-software" target="_blank">The 2100 Expert Software for Bioanalyzer offers powerful data analysis tools for all available assays, allowing you to get the most out of your Bioanalyzer system.	</a></div></div></div>',
							},
																				
										
							{
								tabName:"Literature",
								tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application Note</span><p>Quality Control of NGS Libraries with Daisy Chain Molecules</p><a href="https://www.agilent.com/cs/library/applications/application-QC-NGS-daisy-chain-5994-2233EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-QC-NGS-daisy-chain-5994-2233EN-agilent.pdf</a></li><li><span class="headingBold">Brochure</span><p>Secure Experimental Success</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-protein-sample-control-2100-bioanalyzer-5994-0088EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-protein-sample-control-2100-bioanalyzer-5994-0088EN-agilent.pdf</a></li><li><span class="headingBold">Application Compendium</span><p>Applications for DNA, RNA, and Protein Analysis</p><a href="https://www.agilent.com/cs/library/applications/5991-8974EN_Bioanalyzer-TapeStation_appcompendium.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5991-8974EN_Bioanalyzer-TapeStation_appcompendium.pdf</a></li></ul></div>',
							},
						]
					},
					
					{
						intrumentHotspotName:'<div class="hotspotInfo">Agilent 4150 TapeStation System<ul><li>Economic, entry-level system</li><li>Analysis of up to 16 DNA or RNA samples</li></ul></div>',
						instrumentTitle:'Agilent 4150 TapeStation System',
						instrumentImg:'images/4150_tapestation.png',
						instrumentInfo:"The TapeStation systems are <br>all-in-one platforms that provide rapid, end-to-end, and automated DNA and RNA sample QC for your genomics analyses. No matter your starting sample type, the TapeStation system can analyze them with accurate and precise ScreenTape devices for low-, medium-, and high-throughput labs.",
						tabList :[
							{
								tabName:"Key features",	
								tabInfo: '<div class="dataContainer"><ul> <li>Economic, entry-level system for the analysis of up to 16 DNA and RNA samples at constant costs per sample</li><li>Results in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples</li><li>Established ScreenTape technology for superior ease-of-use</li><li>Wide range of RNA and DNA ScreenTape applications available including assays for genomic and cell-free DNA</li><li>Easy switch between DNA and RNA ScreenTape assays for excellent application flexibility</li><li>Integrity standards for RNA (RNA integrity number equivalent, RIN<sup>e</sup>) and genomic DNA (DNA Integrity Number, DIN) available</li><li>Compact footprint saves precious bench space in the laboratory</li><li>Seamless upgrade to 4200 TapeStation possible by complete assay compatibility</li></ul></div>',
							},
										
							{
								tabName:"Reagents and Kits",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High-Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High-Sensitivity RNA ScreenTape Assay</div></div></div>',
							},
							
							{
								tabName:"Software",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/4150_Tapestation_software.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/tapestation-systems/tapestation-software" target="_blank">The TapeStation software is the single software solution for the Agilent TapeStation systems and offers streamlined data acquisition, data evaluation and reporting of data analysis results.</div></div></div>',	
							},
							
							{
								tabName:"Videos",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_4150_TS_Video.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/4150-tapestation" target="_blank">Get a new perspective on your sample QC | Agilent</a></div></div></div>',
							},
																								
							{
								tabName:"Literature",
								tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application Notes</span><p>Retrospective Quality Analysis of DNA Samples from the Heidelberg CardioBiobank</p><a href="https://www.agilent.com/cs/library/applications/application-dna-quality-heidelberg-cardiobiobank-4150-tapestation-5994-0811en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-dna-quality-heidelberg-cardiobiobank-4150-tapestation-5994-0811en-agilent.pdf</a><p>Monitoring Library Preparation for NGS in Systems Biology Omics Analysis</p><a href="https://www.agilent.com/cs/library/applications/application-alacris-monitoring-library-prep-omics-4150-tapestation-5994-0946en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-alacris-monitoring-library-prep-omics-4150-tapestation-5994-0946en-agilent.pdf</a><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions</p><a href="https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf</a><p>Applications for DNA, RNA, and Protein Analysis</p><a href="https://www.chem-agilent.com/pdf/5991-8974EN_Bioanalyzer-TapeStation_Compendium_Jan2018.pdf" target="_blank">https://www.chem-agilent.com/pdf/5991-8974EN_Bioanalyzer-TapeStation_Compendium_Jan2018.pdf</a></li><li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
							},	
						]
					},
					
					{
						intrumentHotspotName:'<div class="hotspotInfo">Agilent 4200 TapeStation System<ul><li>Walk-away automation in a benchtop system </li><li> Analyse up to 96 DNA or RNA samples</li></ul></div>',
						instrumentTitle:'Agilent 4200 TapeStation System',
						instrumentImg:'images/4200_tapestation.png',
						instrumentInfo:"The TapeStation systems are <br>all-in-one platforms that provide rapid, end-to-end, and automated DNA and RNA sample QC for your genomics analyses. No matter your starting sample type, the TapeStation system can analyze them with accurate and precise ScreenTape devices for low-, medium-, and high-throughput labs.",
						tabList :[
							{
								tabName:"Key features",	
								tabInfo: '<div class="dataContainer"><ul> <li>Walk-away automation in a benchtop system for the analysis of up to 96 DNA or RNA samples</li><li>Any sample number between 1 and 96 can be analyzed, with constant costs per sample providing scalable throughput</li><li>Results are obtained quickly in as little as 1 to 2 minutes per sample, or less than 90 minutes for 96 samples</li><li>Established ScreenTape technology for superior ease-of-use </li><li>Wide range of RNA and DNA ScreenTape applications available including assays for genomic and cell-free DNA</li><li>Easy switch between DNA and RNA ScreenTape assays for excellent application flexibility</li><li>Integrity standards for RNA (RNA integrity number equivalent, RIN<sup>e</sup>) and genomic DNA (DNA Integrity Number, DIN) available</li></ul></div>',
							},
										
							{
								tabName:"Reagents and Kits",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Placeholder.png"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High-Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High-Sensitivity RNA ScreenTape Assay</div></div></div>',
							},
							
							{
								tabName:"Software",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/4200_Tapestation_software.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/tapestation-systems/tapestation-software" target="_blank"The TapeStation software is the single software solution for the Agilent TapeStation systems and offers streamlined data acquisition, data evaluation and reporting of data analysis results.</div></div></div>',	
							},
							
							{
								tabName:"Videos",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_4200_TS_Video.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/video-agilent-4200-tapestation-system" target="_blank">Agilent 4200 TapeStation System | Agilent</a></div></div></div>',
							},
																								
							{
								tabName:"Literature",
								tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application Notes</span><p>Retrospective Quality Analysis of DNA Samples from the Heidelberg CardioBiobank</p><a href="https://www.agilent.com/cs/library/applications/application-dna-quality-heidelberg-cardiobiobank-4150-tapestation-5994-0811en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-dna-quality-heidelberg-cardiobiobank-4150-tapestation-5994-0811en-agilent.pdf</a><p>Monitoring Library Preparation for NGS in Systems Biology Omics Analysis</p><a href="https://www.agilent.com/cs/library/applications/application-alacris-monitoring-library-prep-omics-4150-tapestation-5994-0946en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-alacris-monitoring-library-prep-omics-4150-tapestation-5994-0946en-agilent.pdf</a><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions</p><a href="https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf</a><p>Applications for DNA, RNA, and Protein Analysis</p><a href="https://www.chem-agilent.com/pdf/5991-8974EN_Bioanalyzer-TapeStation_Compendium_Jan2018.pdf" target="_blank">https://www.chem-agilent.com/pdf/5991-8974EN_Bioanalyzer-TapeStation_Compendium_Jan2018.pdf</a></li><li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
							},		
						]
					},
					
					{
						intrumentHotspotName:"ScreenTape Products",
						instrumentTitle:'ScreenTape Products',
						instrumentImg:'images/screentape.png',
						instrumentInfo:"The TapeStation systems are <br>all-in-one platforms that provide rapid, end-to-end, and automated DNA and RNA sample QC for your genomics analyses. No matter your starting sample type, the TapeStation system can analyze them with accurate and precise ScreenTape devices for low-, medium-, and high-throughput labs.",
						tabList :[
							{
								tabName:"Key features",	
								tabInfo: '<div class="dataContainer"><ul> <li>Simplify your workflow with fully automated sample processing and ready-to-use ScreenTape technology</li><li>Easily switch between DNA and RNA ScreenTape assays for excellent application flexibility</li><li>Wide range of RNA and DNA ScreenTape applications available including assays for genomic and cell-free DNA</li><li>Integrity standards for RNA and DNA provide reproducible and objective sample integrity analysis </li><li>Results are obtained quickly; in as little as 1 to 2 minutes per sample, or less than 20 minutes for 16 samples</li></ul></div>',
							},
										
							{
								tabName:"Reagents and Kits",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Cell-free_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Cell-free DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">Genomic DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_DNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High-Sensitivity DNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">RNA ScreenTape Assay</div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_High_Sensitivity_RNA_ScreenTape_Assay.jpg"></div><div class="txtContainer">High-Sensitivity RNA ScreenTape Assay</div></div></div>',
							},
							
							{
								tabName:"Software",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_tapestation_software.jpg"></div><div class="txtContainer">The TapeStation software is the single software solution for the Agilent TapeStation systems and offers streamlined data acquisition, data evaluation and reporting of data analysis results.</div></div></div>',	
							},
							
							{
								tabName:"Videos",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_ScreenTape_devices_Video.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/screentape-production" target="_blank">Agilent ScreenTape Production and Technology | Agilent</a></div></div></div>',
							},
																								
							{
								tabName:"Literature",
								tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application Notes</span><p>Retrospective Quality Analysis of DNA Samples from the Heidelberg CardioBiobank</p><a href="https://www.agilent.com/cs/library/applications/application-dna-quality-heidelberg-cardiobiobank-4150-tapestation-5994-0811en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-dna-quality-heidelberg-cardiobiobank-4150-tapestation-5994-0811en-agilent.pdf</a><p>Monitoring Library Preparation for Next-Generation Sequencing in Systems Biology Omics Analysis</p><a href="https://www.agilent.com/cs/library/applications/application-alacris-monitoring-library-prep-omics-4150-tapestation-5994-0946en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-alacris-monitoring-library-prep-omics-4150-tapestation-5994-0946en-agilent.pdf</a><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions</p><a href="https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf</a><p>Applications for DNA, RNA and Protein Analysis</p><a href="https://www.chem-agilent.com/pdf/5991-8974EN_Bioanalyzer-TapeStation_Compendium_Jan2018.pdf" target="_blank">https://www.chem-agilent.com/pdf/5991-8974EN_Bioanalyzer-TapeStation_Compendium_Jan2018.pdf</a></li><li><span class="headingBold">Brochure</span><p>Complete Success Begins with Sample Quality Control</p><a href="https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-dna-rna-sample-quality-control-tapestation-5994-0060EN-Agilent.pdf</a></li></ul></div>',
							},	
						]
					},
						
					{
						intrumentHotspotName:"Femto Pulse System",
						instrumentTitle:'Femto Pulse System',
						instrumentImg:'images/Femto_pulse.png',
						instrumentInfo:"The Femto Pulse System is a unique, automated sample QC platform that requires only femtogram-quantity inputs of DNA or RNA, allowing you to conserve your precious samples. It also provides unparalleled sensitivity and resolution of even high-molecular-weight (HMW) fragment up to 165 kb in size in about 90 minutes. These features make the Femto Pulse system ideal for sample QC in NGS applications (including long-read NGS) as it is compatible with cell-free DNA (cfDNA), genomic and HMW DNA, total and mRNA, and BAC library digests.",
						tabList :[
							{
								tabName:"Key features",	
								tabInfo: '<div class="dataContainer"><ul> <li>Separate high molecular weight DNA smears and fragments through 165 kb</li><li>Analyze your samples in about 1.5 hours</li><li>Achieve 10 times higher sensitivity for nucleic acid smears and up to 100 times higher for nucleic acid fragments</li><li>Minimize sample degradation with fewer pipetting steps and stable reagents</li><li>One intuitive software program automates analysis of diverse sample types</li><li>Unparalleled sensitivity allows you to use less precious sample and achieve superior detection</li><li>Eliminate pulsed-field gel electrophoresis from long-read NGS library preparation and BAC analysis</li></ul></div>',
							},
										
							{
								tabName:"Reagents and Kits",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Ultra_Sensitivity_NGS_Kit.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-dna-analysis-kits/ultra-sensitivity-ngs-kit-365740" target="_blank">Ultra Sensitivity NGS Kit</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_165kb_Kit.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-dna-analysis-kits/genomic-dna-165-kb-kit-365739" target="_blank">Genomic DNA 165 kb Kit  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Ultra_Sensitivity_RNA_Kit.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/femto-pulse-systems/femto-pulse-system-rna-analysis-kits/ultra-sensitivity-rna-kit-365761" target="_blank">Ultra Sensitivity RNA Kit</a></div></div></div>',
							},
												
							{
								tabName:"Software",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Femto_Pulse_software.jpg"></div><div class="txtContainer">The powerful and intuitive Femto Pulse instrument controller software is optimized for acquiring data generated during pulsed-field electrophoresis runs. The multifeatured user interface is easy to use and versatile. It offers validated methods for consistent electrokinetic injections and voltage separations of nucleic acid samples.</div></div></div>',
							},
												
							{
								tabName:"Literature",
								tabInfo:'<div id="featuresContent" class="dataContainer"><ul><li><span class="headingBold">Brochure</span><p>Fast Separation, Ultra Sensitivity, One Instrument - Agilent Femto Pulse System</p><a href="  https://www.agilent.com/cs/library/brochures/brochure-fast-separation-ultra-sensitivity-one-instrument-femto-pulse-5994-0410en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-fast-separation-ultra-sensitivity-one-instrument-femto-pulse-5994-0410en-agilent.pdf</a></li><li><span class="headingBold">Application Notes</span><p>Genomic DNA Handling and the Agilent Femto Pulse System</p><a href="https://www.agilent.com/cs/library/applications/application-gDNA-handling-Femto-Pulse-5994-2723en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-gDNA-handling-Femto-Pulse-5994-2723en-agilent.pdf</a><p>cfDNA Separated on the Agilent Femto Pulse System</p><a href="https://www.agilent.com/cs/library/applications/application-cfdna-separation-fempto-pulse-5994-0514en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-cfdna-separation-fempto-pulse-5994-0514en-agilent.pdf</a><p>Genomic DNA Sizing and Quality Control on the Agilent Femto Pulse System </p><a href=" https://www.agilent.com/cs/library/applications/application-genomic-dna-sizing-quality-femto-pulse-5994-0516en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-genomic-dna-sizing-quality-femto-pulse-5994-0516en-agilent.pdf</a></li></ul></div>',
							},
						]
					},
							
					{
						intrumentHotspotName:"Fragment Analyzer System",
						instrumentTitle:'Fragment Analyzer System',
						instrumentImg:'images/Fregment_analyzer.png',
						instrumentInfo:"The Fragment Analyzer System helps eliminate NGS library prep bottlenecks by allowing automated sample QC of DNA or RNA samples. It features a broad range of sample types (including gDNA, small, and total RNA, hmwDNA, and cfDNA) and different capillary lengths let you obtain a perfect mix of speed and resolution. This versatility allows you to tailor and optimize your sample QC to your specific NGS workflows.",
						tabList :[
							{
								tabName:"Key features",	
								tabInfo: '<div class="dataContainer"><ul><li>Separate 12 samples in parallel in as little as 15 minutes</li><li>Choose between three different capillary array lengths for the required blend of speed or resolution</li><li>Minimize instrument preparation time with no daily array handling requirements and room-temperature stable reagents</li><li>See clear results with separation resolution as good as 3 bp from fragments under 300 bp</li><li>Improve lab efficiency by loading and programming samples while separation is currently running</li><li>Move samples up or down in queue to adjust run priorities</li><li>Use quality metrics for RNA (RQN) and genomic DNA (GQN) to remove subjective quality assessments</li><li>Kits provide a wide dynamic range covering two orders of magnitude</li><li>Achieve accurate molarity calculations with reliable smear analysis</li></ul></div>',
							},
										
							{
								tabName:"Reagents and Kits",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Small_fragment_and_NGS_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/small-fragment-ngs-kits-365701" target="_blank">Small Fragment and NGS Kits Large Fragment Analysis Kits</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Large_Fragment_Analysis_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/large-fragment-analysis-kits-365703" target="_blank">Large Fragment Analysis Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Genomic_DNA_Kits.jpg"></div><div class="txtContainer"><a href="Kits https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-dna-analysis-kits/genomic-dna-kits-365702" target="_blank">Genomic DNA Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Fragment_Analyzer_RNA_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-rna-analysis-kits/fragment-analyzer-rna-kits-365734" target="_blank">Fragment Analyzer RNA Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Small_RNA_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/automated-electrophoresis/fragment-analyzer-systems/fragment-analyzer-systems-rna-analysis-kits/small-rna-kits-365732" target="_blank">Small RNA Kits </a></div></div></div>',
							},
												
							{
								tabName:"Software",
								tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Fragment_Analyzer_software.jpg"></div><div class="txtContainer">The Fragment Analyzer controller software is optimized to acquire data for low- to ultrahigh-throughput laboratories. The easy-to-use multifeatured software interface provides tested methods for nucleic acid molecules. It generates digital data for the quick and easy visual analysis of DNA and RNA size, concentration, and quality. It provides objective DNA and RNA quality metrics and can be used to analyze a wide range of nucleic acids.</div></div></div>',
							},					
																					
							{
								tabName:"Literature",
								tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Brochure</span><p>Reliable Results for Nucleic Acid Analysis.</p><a href="http://www.agilent.com/cs/library/brochures/brochure-reliable-nucleic-acid-sample-analysis-fragment-analyzer-5994-0414en-agilent.pdf" target="_blank">http://www.agilent.com/cs/library/brochures/brochure-reliable-nucleic-acid-sample-analysis-fragment-analyzer-5994-0414en-agilent.pdf</a></li><li><span class="headingBold">Application Notes</span><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions</p><a href="http://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">http://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf</a><p>Comparison of HS Small Fragment Kit and HS NGS Fragment Kit on the Agilent 5200 Fragment Analyzer System</p><a href="http://www.agilent.com/cs/library/applications/application-genomic-dna-analysis-fragment-analyzer-5994-0515en-agilent.pdf" target="_blank">http://www.agilent.com/cs/library/applications/application-genomic-dna-analysis-fragment-analyzer-5994-0515en-agilent.pdf</a><p>Best Sizing Practices with the Agilent 5200 Fragment Analyzer System</p><a href="https://www.agilent.com/cs/library/applications/application-nucleic-acid-fragment-sizing-fragment-analyzer-5994-0585en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-nucleic-acid-fragment-sizing-fragment-analyzer-5994-0585en-agilent.pdf</a><p>Best Quantification Practices with the Agilent 5200 Fragment Analyzer System</p><a href="https://www.agilent.com/cs/library/applications/application-nucleic-acid-quantification-fragment-analyzer-5994-0513en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-nucleic-acid-quantification-fragment-analyzer-5994-0513en-agilent.pdf</a></li></ul></div>',
							},
						]
					},
				]	
			},
										
			2:{
					
				workflowName : "Library Preparation & Target Enrichment",
				labImg:"images/Library_Preparation_Lab.svg",
				workflowIcon:"images/Library_preparation_n_Target_enrichment.png",
				bgColor:"#0b436a",
				videoUrl:"https://app.frame.io/reviews/c5bbf614-eb77-4711-aca9-bae2c7eab459/3c1644fa-f692-447f-b758-46d133f6642e",
				valueProposition:"Hybrid-capture targeted sequencing is a sensitive technology that provides a more time- and cost-effective approach for investigating genetic and genomic aberrations such as SNVs, CNVs, structural variants, and more. By enriching NGS libraries for your genes of interest, targeted sequencing enables greater insights into novel gene functions, mutations, and helps you identify rare variants that other methods can miss.",													
                agilentOfferings:"Agilent provides a full suite of hybridization capture-based target enrichment NGS products, including library preparation and target enrichment kits, catalog and custom probe sets, sample quality control, and automation platforms. Whether your research needs a catalog NGS panel or a custom design focused on your genes of interest, Agilent has the solutions for you.",		
				instrumentList :[
						{
							instrumentSubList:[
								{
									intrumentHotspotName:"SureSelect Product Portfolio",
									instrumentTitle:'SureSelect',
									instrumentImg:'images/SureSelect_reagents_kit.png',
									instrumentInfo:"If you need a more personalized approach, you can easily design custom probes for your targets of interest with SureDesign. This free web-based application harnesses the flexibility of our SurePrint oligo manufacturing technology for the creation of NGS panels or probe sets tailored to your needs and/or for <br>cross-validation across multiple applications.",
									tabList :[
										{
											tabName:"Key features ",	
											tabInfo: '<div class="dataContainer"><ul><li>NGS Target Enrichment: Create custom SureSelect or HaloPlex target enrichment library designs based on the targets you want to sequence</li><li>Define regions of interest and select probes based on target genes, genomic coordinates, or selection parameters</li><li>Identify potential target candidate sites in the input or selected background</li><li>Download ready to order DNA sequence templates</li><li>Generate high-quality libraries with as little as 10 ng of DNA input from intact or highly fragmented FFPE DNA</li><li>Satisfy most of your NGS sample preparation needs with one streamlined and flexible solution</li><li>Use single/duplex molecular barcodes (MBC) to remove false positives and accurately detect variants down to ≤1% variant allele frequency</li><li>Minimize index hopping with 384 unique dual indexing</li><li>Simplify your order experience with the all-inclusive starter kit</li><li>Use with SureSelect exomes, catalog panels or easily create custom panels with the SureDesign software</li><li>One easy, parallel workflow for targeted RNA and DNA sequencing using SureSelect XT HS2 chemistry</li><li>SureSelect Exomes offer superior coverage with excellent overall exonic coverage and enhanced coverage of disease-associated regions annotated in HGMD, OMIM, ClinVar, and ACMG databases</li><li>Minimal NGS experience required to run the Magnis</li><li>SureSelect Cancer All-In-One Assays provide all-in-one profiling of SNVs, indels, CNVs, and translocations relevant to somatic cancer from a single DNA sample of 50 ng or less</li><li>Agilent Community Designs offer NGS panels with the content derived from experts in the respective disciplines </li></ul></div>',
										},
												
										{
											tabName:"Reagents and Kits",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-custom-ngs-assays-520080" target="_blank">SureSelect Cancer All-In-One Custom NGS Assays </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Custom_DNA_Target_Enrichment.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-custom-target-enrichment-probes/ngs-custom-target-enrichment-probes-232874" target="_blank">SureSelect Custom DNA Target Enrichment Probes</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Custom_DNA_Target_Enrichment.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-custom-target-enrichment-probes/sureselect-custom-rna-target-enrichment-probes-232875" target="_blank">SureSelect Custom RNA Target Enrichment Probes</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_HS2_DNA_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/dna-seq-reagents-kits-library-preparation-kits/sureselect-xt-hs2-dna-reagent-kit-783974  ">SureSelect XT HS2 DNA Reagent Kits  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/dna-seq-reagents-kits-library-preparation-kits/sureselectxt-low-input-reagent-kits-232858  ">SureSelect XT Low Input Reagent Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_HS2_RNA_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/rna-seq-library-preparation-kits/sureselect-xt-hs2-rna-reagent-kit-1049115">SureSelect XT HS2 RNA Reagent Kits </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-lung-assay-520074" target="_blank">SureSelect Cancer All-In-One Lung Assay  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-custom-ngs-assays-520080" target="_blank">  SureSelect Cancer All-In-One Custom NGS Assays </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/cancer-all-in-one-assays/sureselect-cancer-all-in-one-solid-tumor-assay-520077" target="_blank"> SureSelect Cancer All-In-One Solid Tumor Assay  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-focused-exome-232869" target="_blank">SureSelect Focused Exome</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-clinical-research-exome-v2-232867" target="_blank">SureSelect Clinical Research Exome V2   </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-human-all-exon-v7-232866" target="_blank">SureSelect Human All Exon </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/exome-probes/sureselect-non-human-exomes-232868" target="_blank">SureSelect Non-human Exomes  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Oncology_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/agilent-community-designs-for-oncology-research-750982" target="_blank">Agilent Community Designs for Oncology Research     </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Infectious_Disease_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/infectious-disease-research-designs-536208" target="_blank">Agilent Community Designs for Infectious Disease Research   </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Model_Organism_Sequencing.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/model-organism-exome-sequencing-designs-536201" target="_blank"> Agilent Community Designs for Model Organism Sequencing  </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Epigenetics_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/designs-for-epigenetics-research-536211" target="_blank"> Agilent Community Designs for Epigenetics Research   </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Community_Designs_Human_Genetics_Research.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/community-designs-ngs/inherited-disease-research-designs-536204" target="_blank"> Agilent Community Designs for Human Genetics  Research </a></div></div></div>',
										},
														
										{
											tabName:"Videos",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Custom_Genomics_Overview.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/agilent-custom-genomics-overview" target="_blank">Agilent Custom Genomics Overview</a> </div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XTHS2_DNA_Reagent_Kit_webinar.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/sureselect-xths2-dna-kit-webinar" target="_blank">SureSelect XT HS2 DNA Reagent Kit Webinar</a> </div></div><div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XTHS2_RNA_Reagent_Kit_webinar.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/sureselect-xt-hs2-rna-kit-eseminar" target="_blank">SureSelect XT HS2 RNA Reagent Kit Webinar</a> </div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Glasgow_Cancer_Core_Panel_Webinar.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/glasgow-cancer-core-panel-webinar" target="_blank">Glasgow Cancer Core Panel Webinar </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Automating_SureSelect_NGS_workflow.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/automating-the-sureselect-ngs-workflow" target="_blank">Automating the SureSelect NGS workflow </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_and_4150_TapeStation.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-4150-tapestation-video" target="_blank"> Disease gene identification by exome sequencing</a></div></div></div>',
										},
														
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyers</span><p>SureDesign Custom Portal</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf</a><p>Agilent NGS Design Testing Service</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf </a><p>Agilent Community Design Oncology Research NGS Panels flyer</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-genomics-glasgow-panel-5994-1477en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-genomics-glasgow-panel-5994-1477en-agilent.pdf</a><p>Agilent Community Designs for Infectious Disease Research </p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ACD-coronavirus-5994-2154EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-ACD-coronavirus-5994-2154EN-agilent.pdf</a><p>Agilent Community Design Infectious Disease Pathogen NGS Panels</p><a href="https://www.agilent.com/cs/library/flyers/public/ACD%20Pathogen%20Infectious%20Disease%20Flyer_2.4.pdf?elqTrackId=8af96419240e4b7ab41bb65abd909623&elqaid=2533&elqat=2" target="_blank">https://www.agilent.com/cs/library/flyers/public/ACD%20Pathogen%20Infectious%20Disease%20Flyer_2.4.pdf?elqTrackId=8af96419240e4b7ab41bb65abd909623&elqaid=2533&elqat=2</a><p>Agilent Community Designs for Model Organism Exome</p><a href="https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Model%20Organism%20Flyer%205994-1441EN%201.4.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Model%20Organism%20Flyer%205994-1441EN%201.4.pdf</a><p>Agilent Community Design Epigenetic Research Panels</p><a href="https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Methyl%20Seq%20Flyer%205994-1440EN%201.3.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/NGS%20SureSelect%20XT%20Methyl%20Seq%20Flyer%205994-1440EN%201.3.pdf</a></li><li><span class="headingBold">Data Sheets</span><p>SureSelect XT HS2 DNA Reagent Kit</p><a href="https://www.agilent.com/cs/library/datasheets/public/XT-HS2-Datasheet-5994-1687EN-1-5.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/XT-HS2-Datasheet-5994-1687EN-1-5.pdf</a><p>SureSelect XT HS2 RNA Reagent Kit</p><a href="https://www.agilent.com/cs/library/datasheets/public/datasheet-sureselect-xt-hs2-RNA-reagent-kit-5994-2314EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/datasheet-sureselect-xt-hs2-RNA-reagent-kit-5994-2314EN-agilent.pdf</a><p>SureSelect Cancer All-In-One Lung Assay</p><a href="https://www.agilent.com/cs/library/datasheets/public/5994-0231EN.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/5994-0231EN.pdf</a><p>SureSelect All-in-One Tumor Assay</p><a href="https://www.agilent.com/cs/library/datasheets/public/AIO-Solid-Tumor-Datasheet-5994-1005EN-1_6.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/AIO-Solid-Tumor-Datasheet-5994-1005EN-1_6.pdf</a> </li><li><span class="headingBold">Application Note</span><p>Optimizing the Human Whole Exome Sequencing Process</p><a href="https://www.agilent.com/cs/library/applications/5994-0667EN.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-0667EN.pdf</a></li><li><span class="headingBold">Brochures</span><p>SureSelect V7</p><a href="https://www.agilent.com/en/promotions/sureselect-human-all-exon-v7-form" target="_blank">https://www.agilent.com/en/promotions/sureselect-human-all-exon-v7-form</a><p>Innovation Powered by You brochure</p><a href="https://www.agilent.com/cs/library/brochures/Agilent_Community_Designs_Solutions_Brochure_CPOD_59940890EN.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/Agilent_Community_Designs_Solutions_Brochure_CPOD_59940890EN.pdf</a><p>SureSelect Cancer All-In-One Custom and Catalog NGS Assays brochure </p><a href="https://www.agilent.com/cs/library/brochures/NGS%20SureSelect%20Cancer%20All-In-One%20Brochure%205994-0668EN%204.8%20(single%20pages).pdf" target="_blank">https://www.agilent.com/cs/library/brochures/NGS%20SureSelect%20Cancer%20All-In-One%20Brochure%205994-0668EN%204.8%20(single%20pages).pdf</a></li></ul></div>',
										},
									]
								},
							],
						},  
						
						{
							intrumentHotspotName:'SureDesign',
							instrumentTitle:'SureDesign',
							instrumentImg:'images/SureSelect_reagents_kit.png',
							instrumentInfo:"SureDesign is a web-based application that harnesses the flexibility of SurePrint oligo manufacturing technology for the creation of custom NGS target enrichment libraries, CGH microarray designs, and FISH probes. SureDesign, free to all registered users, has an intuitive design wizard that creates custom panels specific to research needs, as well as for cross-validation using multiple applications. ",
							tabList :[
								{
									tabName:"Key features",	
									tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>NGS Target Enrichment: Create custom SureSelect or HaloPlex target enrichment library designs based on the targets you want to sequence</li><li>Define regions of interest and select probes based on target genes, genomic coordinates, or selection parameters</li><li>CGH, ChIP-on-chip, DNA Methylation: Create custom CGH designs with various layouts, from 8 x 15 K up to 1 x 1 M</li><li>CRISPR Guide RNAs: Find gRNAs that target CRISPR sites within any sequence</li><li>Identify potential target candidate sites in the input or selected background</li><li>Download ready to order DNA sequence templates</li><li>FISH Probes: Input gene names, accession IDs, or genomic coordinates to create custom break apart, dual fusion or single probes</li><li>Rapidly validate results by creating the same assay on a FISH probe and an array or target enrichment library</li></ul></div>',
								},
								{
									tabName:"Reagents and Kits",
									tabInfo: '<div class="dataContainer"><div class="reagentsContent"></div></div>',
								},
								
								{
									tabName:"Software",
									tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureDesign.jpg"></div><div class="txtContainer"><a href="https://earray.chem.agilent.com/suredesign/index.htm?sessiontimeout=true" target="_blank">SureDesign</a> </div></div></div>',
								},
									
								{
									tabName:"Videos",
									tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Custom_Genomics_Overview.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/agilent-custom-genomics-overview" target="_blank">Agilent Custom Genomics Overview</a> </div></div></div>',
								},
										
								{
									tabName:"Literature",
									tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyers</span><p>Agilent NGS Design Testing Service</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf" target="_blank"> https://www.agilent.com/cs/library/flyers/public/flyer-ngs-design-testing-serivce-5994-2287-agilent.pdf</a><p>SureDesign Custom Portal Flyer</p><a href="https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/flyer-custom-portal-suredesign-5994-2288EN-agilent.pdf</a></li></ul></div>',
								},
							]
						},
							
						{
							intrumentHotspotName:'<div class="hotspotInfo">Magnis NGS Prep System <br><p>Low- to medium-throughput automation</p></div>',
							instrumentTitle:'Magnis NGS Prep System',
							instrumentImg:'images/Magnis_NGS_Prep_system.png',
							instrumentInfo:"The Magnis system provides a fully automated NGS library preparation platform that makes it easy to assay multiple genes and/or complex genetic aberrations with high reproducibility. Its walk-away automation reduces your <br>hands-on time to as little as five minutes for library preparation and target enrichment of up to eight samples, giving you more consistent data faster and shortening your time to results (and publications).",
							tabList :[
								{
									tabName:"Key features",	
									tabInfo: '<div id="featuresContent" class="dataContainer"><ul> <li>Minimal NGS experience required to run the Magnis</li><li>Scalable, walk-away automation ideal for low-to-medium-throughput labs</li><li>Complementary too high throughput automation for small number of samples</li><li>Efficient workflows let you save time and focus on data analysis rather than hands-on time in the lab</li><li>Validated, ready-to-use protocols that are pre-optimized with SureSelect reagents</li><li>Seamless integration with Agilent NGS workflow solutions for sample preparation, QC, data analysis, and clinical interpretation</li><li>When combined with the Agilent 4150 TapeStation System, the Magnis system provides quality control of the sample throughout the workflow</li></ul></div>',
								},
								{
									tabName:"Reagents and Kits",
									tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_SureSelect_XT_HS_Reagents.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/next-generation-sequencing/hybridization-based-next-generation-sequencing-ngs/ngs-automation-platforms/magnis-sureselect-xths-reagents-456506" target="_blank">Magnis SureSelect XT HS Reagents</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_Cancer_All_In_One_NGS_Assays.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/hybridization-based-next-generation-sequencing-(ngs)/ngs-custom-target-enrichment-probes/sureselect-cancer-all-in-one-custom-ngs-assay-282156" target="_blank">SureSelect Cancer All-In-One Custom NGS Assay</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_SureSelect_XT_Low_Input_Reagent_Kits.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/hybridization-based-next-generation-sequencing-(ngs)/dna-seq-reagents-kits-library-preparation-kits/sureselectxt-hs-reagent-kits-232857" target="_blank">SureSelectXT HS Reagent Kits</a></div></div></div>',
								},
										
								{
									tabName:"Software",
									tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_Software_Download_Version1.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/magnis-software-download-page?productURL=https%3A%2F%2Fwww.agilent.com%2Fen%2Fproduct%2Fnext-generation-sequencing%2Fhybridization-based-next-generation-sequencing-ngs%2Fngs-automation-platforms%2Fmagnis-ngs-prep-system-291083" target="_blank">Magnis Software Download Version 1.1.1 </div></div></div>',
								},
										
								{
									tabName:"Videos",
									tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Walk_away_NGS_automation.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-video-walk-away-ngs-automation-now-at-your-fingertips" target="_blank">Magnis Video - Walk-away NGS automation – Now at your fingertips</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_Deck_Loading_Video.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-deck-loading-video" target="_blank">Magnis Deck Loading Video - Learn how easily you can load your samples on the Magnis NGS Prep System </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_and_4150_TapeStation.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-4150-tapestation-video" target="_blank">Magnis and 4150 TapeStation - Ideal Solution of Quality Control in Your NGS Workflow: </a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Magnis_Complete_System_for_NGS_Library_Preparation.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-complete-system-for-ngs-library-preparation" target="_blank">Magnis: Complete System for NGS Library Preparation</a></div></div><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Prof_Marchetti_E_Seminar_Video.jpg"></div><div class="txtContainer"><a href="https://www.agilent.com/en/video/magnis-complete-system-for-ngs-library-preparation" target="_blank">Magnis: Complete System for NGS Library Preparation Prof. Marchetti, E-Seminar Video</a></div></div></div>',
								},
										
								{
									tabName:"Literature",
									tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Application Notes</span><p>Bridging the Efficiency and Throughput Gap with Magnis Automated NGS Library Preparation Solution:</p><a href="https://www.agilent.com/cs/library/applications/application-bridging-efficiency-gap-magnis-5994-2457EN-agilent.pdf" target="_blank"> https://www.agilent.com/cs/library/applications/application-bridging-efficiency-gap-magnis-5994-2457EN-agilent.pdf</a><p>Quality Control of Magnis SureSelect XT Hs Workflow with Agilent Automated Electrophoresis Solutions:</p><a href="https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/applications/application-quality-control-magnis-sureselect-5994-1741en-agilent.pdf </a></li><li><span class="headingBold">Brochure</span><p>Your labs automated library preparation solution for next-generation sequencing:</p><a href="https://www.agilent.com/cs/library/brochures/Magnis%20System%20Brochure%205994-0661EN.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/Magnis%20System%20Brochure%205994-0661EN.pdf </a></li><li><span class="headingBold">Data Sheet</span><p>Agilent Magnis NGS Prep System</p><a href="https://www.agilent.com/cs/library/datasheets/public/Magnis%20NGS%20Prep%20System%20Datasheet%205994-1624EN.pdf" target="_blank">https://www.agilent.com/cs/library/datasheets/public/Magnis%20NGS%20Prep%20System%20Datasheet%205994-1624EN.pdf </a></li></ul></div>',
								},
							]
						},
							
						{
							intrumentHotspotName:'<div class="hotspotInfo">Agilent Bravo NGS System<p>High-throughput automation</p></div>',
							instrumentTitle:'Agilent Bravo NGS System',
							instrumentImg:'images/Bravo_NGS.png',
							instrumentInfo:"The Agilent Bravo NGS system is an automated liquid handling platform for genetics labs that require more versatility and higher throughput. This system features Preconfigured hardware and protocols for your routine genomics workflows, but provides the flexibility for advanced users to develop and automate in-house protocols, so you can spend less time generating results and more time analyzing them.",
							tabList :[
								{
									tabName:"Key features",	
									tabInfo: '<div class="dataContainer"><ul><li>Quickly automate with ready-to-use protocols and predeveloped methods for Agilent SureSelect, Agilent HaloPlex, Illumina TruSeq, NuGEN Ovation, KAPA HTP, PacBio SMRTbell, NEBNext, and more</li><li>Easy to use interface requires no programming expertise to run your automated methods</li><li>Consistent data quality allows you to increase your throughput, with consistent results every time</li><li>Prepare up to ten times more samples in the same time</li><li>Open platform allows you to automate more NGS or genomics methods with confidence</li></ul></div>',
								},
										
																						
								{
									tabName:"Videos",
									tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/Teaser_Bravo_Automated_Sample_Preparation.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/video/automated-sample-prep-bravo-portfolio" target="_blank">Agilent Bravo Automated Sample Preparation</a></div></div></div>',
								},
												
								{
									tabName:"Literature",
									tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Flyer</span><p>AUTOMATION SOLUTIONS: Easy to use, ready protocols for Automated NGS sample preparation</p><a href="https://www.agilent.com/cs/library/flyers/public/5991-2439EN.pdf" target="_blank">https://www.agilent.com/cs/library/flyers/public/5991-2439EN.pdf</a></li><li><span class="headingBold">Brochure</span><p>Agilent Automation Solutions Portfolio</p><a href="https://www.agilent.com/cs/library/brochures/5991-2469EN_lores.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/5991-2469EN_lores.pdf </a></li><li><span class="headingBold">Application Note</span><p>Automation of the Lexogen QuantSeq 3 mRNA Kit on the Agilent NGS Workstation</p><a href="https://www.agilent.com/cs/library/applications/5991-8601EN_Auto_NGS_Application.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5991-8601EN_Auto_NGS_Application.pdf</a></li></ul></div>',
								},
							]
						}, 	 
					]
			},
										
			3:{
				workflowName : "Data Analysis & Reporting",
				labImg:"images/Data_Analysis_lab.svg",
				workflowIcon:"images/Sample_Analysis_and_Report_icon.png",
				bgColor:"#0b436a",
				videoUrl:"https://app.frame.io/reviews/c5bbf614-eb77-4711-aca9-bae2c7eab459/3c1644fa-f692-447f-b758-46d133f6642e",
				valueProposition:"Analyzing NGS data and confidently identifying novel variants can be a challenge. The Alissa Clinical Informatics suite gives you a universal platform for the quick and easy analysis of NGS data for molecular pathology, clinical genetics, and translational research applications. These solutions can help streamline your data analysis and variant interpretation with end-to-end support from raw data to clinical reports.",
                    
				instrumentList :[
							{
								intrumentHotspotName:"SLIMS",
								instrumentTitle:'SLIMS',
								instrumentImg:'images/SLIMS_instrument.png',
								instrumentInfo:"SLIMS combines the best of a LIMS and ELN to visually track samples through complex NGS workflows. You can design NGS plates through batch processing or with drag-and-drop functionality, track external barcodes, assign indexes on a plate layout, or generate libraries.",
								tabList :[
										{
											tabName:"Key features",	
											tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li>Assign lanes and pool libraries by drag and drop with automatic index ambiguity checks</li><li>Integrate with protocols and external analysis platforms to completely support your workflows</li><li>Drag and drop NGS plates with the user-friendly interface, and assign library barcodes with the click of a button</li><li> Analyze NGS data with Galaxy and Gene Pattern hooked into one platform to reduce manual effort</li><li>Export sample sheets and plate design, and manage sequencing of MiSeq, HiSeq, and NovaSeq files within the same interface</li></ul></div>',
										},
	
										{
											tabName:"Software",
											tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/SLIMS_software.png"></div><div class="txtContainer"><a href="https://www.agilent.com/en/product/software-informatics/lab-workflow-management-software/slims" target="_blank">Link to SLIMS page</a></div></div></div>',
										},
												
																						
										{
											tabName:"Literature",
											tabInfo: '<div class="dataContainer"><ul><li><span class="headingBold">Brochure</span><p>Agilent SLIMS</p><a href="https://www.agilent.com/cs/library/brochures/brochure-slims-5994-1578en-agilent.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/brochure-slims-5994-1578en-agilent.pdf</a></li></ul></div>',
										},
								]
							},
							{
								instrumentSubList:[
									{
										intrumentHotspotName:"Alissa Clinical Informatics",
										instrumentTitle:'Alissa Secondary Analysis',
										instrumentImg:'images/Alissa_clinical_information.png',
										instrumentInfo:"Unlock true value from your raw sequencing data with the Alissa Informatics secondary analysis solution.", 
										
										tabList :[
												{
													tabName:"Key features",	
													tabInfo: '<div class="dataContainer"><ul><li>Scalable NGS secondary data analysis solution</li><li>Optimized algorithms to detect SNPs/Indels, CNVs, LOH, and Translocations</li><li>Superior visualization tools to aid reviewing called variants in context<li>Integrated QC to inform confidence in assay results</li><li>Seamless integration with Alissa Interpret for clinical-grade variant assessment and reports, reducing workflow complexity and time from FASTQ to report</li></ul></div>',
												},
												
																								
												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/teaser_align_call.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/next-generation-sequencing/clinical-informatics-platform/alissa-align-call-930087" target="_blank">Alissa Align and Call</a></div></div></div>',
												},
														
												
												{
													tabName:"Literature",
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li><span class="headingBold">Application Notes</span><p>Analysis of OneSeq on Alissa Clinical Informatics Platform </p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a><p>Alissa Interpret AMP Battle of Pipelines</p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a></li><li><span class="headingBold">Brochure</span><p>Molecular Pathology: Genoptic</p><a href="https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf" target="_blank">https://www.agilent.com/cs/library/applications/5994-1090EN%20OneSeq_Alissa%20AppNote_20190905.pdf</a></li></ul></div>',
												},
										]
									},
									
									{
										intrumentHotspotName:"Alissa Interpret",
										instrumentTitle:'Alissa Interpret',
										instrumentImg:'images/Alissa_clinical_information.png',
										instrumentInfo:"Your data has given you numerous variants, but which ones are important—or have already been reported? Alissa Interpret gives you a web-based informatics solution that lets you rapidly triage, curate, and report the genomic variants that are most likely to be driving novel biological functions.",
										disclaimer:true,
										disclaimerTxt:"Disclaimer: Alissa Interpret is a USA Class I Exempt Medical Device, Europe CE IVD, Canada, and Australia Class I IVD Device.",
										tabList :[
												{
													tabName:"Key features",	
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li>Cloud-based SaaS solution to minimize turnaround time from VCF to report</li><li>Community-driven and premium third-party knowledge bases</li><li>Internal managed variant lists with full traceability, reproducibility, and versioning of annotation sources</li><li>Visualization and interpretation of SNPs, indels, CNVs, LOH, and translocations/fusion genes</li><li>Agnostic solution for small panels to exomes and whole genomes with compatibility to support any design, sequencer, or assay</li></ul></div>',
												},
												
												
														
												{
													tabName:"Software",
													tabInfo: '<div class="dataContainer"><div class="reagentsContent"><div class="imgContainer"><img src="images/teaser_alissa_interpret.jpg"></div><div class="txtContainer"><a href=" https://www.agilent.com/en/product/next-generation-sequencing/clinical-informatics-platform/alissa-interpret-930086" target="_blank">Link to Alissa Interpret </a></div></div></div>',
												},
														
																								
												{
													tabName:"Literature",
													tabInfo: '<div id="featuresContent" class="dataContainer"><ul><li><span class="headingBold">Data Sheets</span><p>Alissa Interpret</p><a href="https://www.agilent.com/cs/library/brochures/Copy%20of%20Alissa%20Interpret%20Datasheet_5991-8498EN.pdf" target="_blank">https://www.agilent.com/cs/library/brochures/Copy%20of%20Alissa%20Interpret%20Datasheet_5991-8498EN.pdf </a></li><li><span class="headingBold">Case Study Compendium</span><p>Alissa Clinical Informatics Platform</p><a href="https://www.agilent.com/cs/library/casestudies/public/5991-8535EN.pdf" target="_blank">https://www.agilent.com/cs/library/casestudies/public/5991-8535EN.pdf</a></li></ul></div>',
												},
										]
									},
								]
							},		
					]
				},
	}
}