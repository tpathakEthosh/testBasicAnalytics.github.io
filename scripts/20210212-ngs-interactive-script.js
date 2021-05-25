(function($) {
	$(window).ready(function() {

		var personaItemIndex = 1;
		var workflowItemIndex =1;
		var instrumentHotspotIndex = 1;
		
		var personaList = dataList.personaList;
		var workflowList = dataList.workflowList;
		
		/********************** Band video *********************************/
		
		$(".bandVideo").on("click",function(){
			bandIndex = $(this).attr("bandIndex");
			$(".videoOverlay").show();
			$(".videoPopup").hide();
			$("#videoPopup"+bandIndex).show();
		})
		
		$(".cta-go").on("click",function(){
			selectWorkflowSlide();
			$(".videoOverlay").hide();
			workflowItemIndex = $(this).attr("workflowItemIndex");
			setInstrument(workflowItemIndex);
			videoClose();
		})
		
		$(".videoClose").on("click",function(){
			$(".videoOverlay").hide();
			videoClose();
		})
		
		function videoClose(){
			$('.videoPopup').find('video').each(function(){
				this.currentTime=0;
				this.pause();
			});
		}
//Perosna List//

		/************************************************ Perosna List *********************************************/
		
		for(i=1;i<=Object.keys(personaList).length;i++){
			$(".personaBtnPanel").append('<div class="personaBtn" id="personaBtn'+i+'" personaItemIndex="'+i+'" workflowItemIndex="'+1+'"><div class="personaBtnContainer"><div class="personaIcon" id="personaIcon'+i+'"><img src="'+personaList[i].personaIcon+'"></div><div class="personaName">'+personaList[i].personaName+'</div></div></div>');
			
			$(".personaBtnPanel").find(".personaBtn #personaIcon"+i).css({"border":"3px solid "+personaList[i].bgColor});
			
			$(".personaBtnPanel").find("#personaBtn"+i).on("click",function(){
				selectWorkflowSlide();
				setPersonaInstrument($(this));
			})
		}
		
		/***************************************** Set perosna workflow dropdown list *****************************************/

		function setPerosnaWorkflow(personaItemIndex,workflowItemIndex){

			$('.selectWorkflow').html(personaList[personaItemIndex].workflowList[workflowItemIndex].workflowName);
			
			$("#personaPanel .bandContent").find(".perosnaInfo").remove();
			
			$("#personaPanel .bandContent").append('<div class="perosnaInfo"><div class="personaIcon" id="personaIcon'+personaItemIndex+'"><img src="'+personaList[personaItemIndex].personaIcon+'"></div><div class="commaIcon"><img src="images/Inverted_comma.png"></div><div class="personaContent"><div class="personaHeading">'+personaList[personaItemIndex].personaName+'</div><div class="personaDescription">'+personaList[personaItemIndex].personaDescription+'</div></div></div>');
			
			$("#personaPanel .bandContent").find(".perosnaInfo #personaIcon"+personaItemIndex).css({"border":"3px solid "+personaList[personaItemIndex].bgColor});
			
			$("#personaPanel").css({"background-image":"url('"+personaList[personaItemIndex].personaBand+"')","background-size":"contain"});
			
			$('.workflowPanel').empty();
			$(".instrumentContainer").find(".navigationPanel").empty();
	
			for(i=1;i<=Object.keys(personaList[personaItemIndex].workflowList).length;i++){
				
				if(workflowItemIndex!=i){
					
					$("#personaPanel .bandContent").find(".workflowContainer .workflowPanel").append('<div class="workflowItem navigationItem" personaItemIndex="'+personaItemIndex+'" workflowItemIndex="'+i+'">'+personaList[personaItemIndex].workflowList[i].workflowName+'</div>');
					
					$(".instrumentContainer").find(".navigationPanel").append('<div class="navigationBtn navigationItem" personaItemIndex="'+personaItemIndex+'" workflowItemIndex="'+i+'">'+personaList[personaItemIndex].workflowList[i].workflowName+'</div>');
					
					$('.navigationItem').click(function(){
					   // workflowItemIndex = $(this).attr("workflowItemIndex");
						$('.workflowPanel').slideUp();
						setPersonaInstrument($(this));
					})
				}
			}	
		}
		
		/***************************************** set perosna lab and instrument *****************************************/
		
		function setPersonaInstrument(personaInstrument){
			personaItemIndex =  personaInstrument.attr("personaItemIndex");
				
			workflowItemIndex = personaInstrument.attr("workflowItemIndex");
			
			$(".bandContent,.infoOverlay").show();
			
			$(".infoContainerDiv").empty();
			
			$(".infoIcon").removeClass("without-after-element infoClose");
			

			if(personaList[personaItemIndex].workflowList[workflowItemIndex].valueProposition){
				$(".infoContainerDiv").append('<div class="contentDiv"><div class="contentDivHeader"><div class="headerIcon"><img  src="images/Value_preposition_icon.png"></div><div class="contentDivHeading">Our Strength</div></div><div class="contentDivInfo">'+personaList[personaItemIndex].workflowList[workflowItemIndex].valueProposition+'</div></div>');
				
				if(workflowItemIndex==3){
					$(".infoContainerDiv").css("height","250px");
				}
			}
			
			if(personaList[personaItemIndex].workflowList[workflowItemIndex].agilentOfferings){
				$(".infoContainerDiv").append('<div class="contentDiv"><div class="contentDivHeader"><div class="headerIcon"><img src="images/Agilent_offering_icon.png"></div><div class="contentDivHeading">Our Offerings</div></div><div class="contentDivInfo">'+personaList[personaItemIndex].workflowList[workflowItemIndex].agilentOfferings+'</div></div>');
			}
			
			$(".infoContainerDiv").slideDown(500);
			
			$('.instrumentContainer').find(".instrumentlab").remove();
			$(".instrumentContainer").append('<div class="instrumentlab" id="instrumentlab'+personaItemIndex+'"><img src="'+personaList[personaItemIndex].workflowList[workflowItemIndex].labImg+'"</div>');

			$('.instrumentContainer .instrumentlab').animate({
                left: "0px",
            },500);
			
			setPerosnaWorkflow(personaItemIndex,workflowItemIndex);
			
			personaWorkflowEntity = personaList[personaItemIndex].workflowList[workflowItemIndex].instrumentList;

			for(j=0;j<Object.keys(personaWorkflowEntity).length;j++){
				
				if(personaWorkflowEntity[j].instrumentSubList){
					$(".instrumentContainer").find(".instrumentlab").append('<div class="instrumentHotspot instrumentHotspot'+workflowItemIndex+'" id="instrumentHotspot'+workflowItemIndex+j+'"><div class="workflowName" id="perosnaWorkflowName'+j+'" instrumentHotspotIndex="'+j+'" workflowItemIndex="'+workflowItemIndex+'" personaItemIndex="'+personaItemIndex+'">'+personaWorkflowEntity[j].instrumentSubList[0].intrumentHotspotName+'</div><div class="line"></div></div>');
					
					
				}
				
				else{
					$(".instrumentContainer").find(".instrumentlab").append('<div class="instrumentHotspot instrumentHotspot'+workflowItemIndex+'" id="instrumentHotspot'+workflowItemIndex+j+'"><div class="workflowName" id="perosnaWorkflowName'+j+'" instrumentHotspotIndex="'+j+'" workflowItemIndex="'+workflowItemIndex+'" personaItemIndex="'+personaItemIndex+'">'+personaWorkflowEntity[j].intrumentHotspotName+'</div><div class="line"></div></div>');
				}
				
				$('#perosnaWorkflowName'+j).click(function(){
					displayPersonaInstrumentContent($(this));
				})
			}
		}
		
		/***************************************** display perosna Instrument's Content *****************************************/
		
		function displayPersonaInstrumentContent(instrumentTab){
			instrumentHotspotIndex = $(instrumentTab).attr("instrumentHotspotIndex");
			workflowItemIndex = $(instrumentTab).attr("workflowItemIndex");
			personaItemIndex = $(instrumentTab).attr("personaItemIndex");
			
			$('.workflowPanel').slideUp();
					
			$(".instrumentOverlay").slideDown();
			
			$(".instrumentOverlay").find(".popUpDataContainer").empty();
			
			personaWorkflowEntity = personaList[personaItemIndex].workflowList[workflowItemIndex].instrumentList;

			subListEntity = personaList[personaItemIndex].workflowList[workflowItemIndex].instrumentList[instrumentHotspotIndex].instrumentSubList;
			
			changeColor = personaList[personaItemIndex].bgColor;
			
			if(subListEntity){
				
				displaySubListEntity();
			}
			
			else{
				$(".instrumentOverlay .popUpDataContainer").append('<div class="instrumentInfo"><div class="instrumentInfoContainer"><div class="imgContainer"><img src="'+personaWorkflowEntity[instrumentHotspotIndex].instrumentImg+'"></div><div class="infoContainer">'+personaWorkflowEntity[instrumentHotspotIndex].instrumentInfo+'</div></div><div class="band darkblueband"></div><div class="band lightblueband"></div></div><div class="instrumentTabInfo"><div class="headingContainer"><div class="instrumentHeading">'+personaWorkflowEntity[instrumentHotspotIndex].instrumentTitle+'</div><div class="closePopupBtn"></div></div><div id="popUpData"><div class="tabList"></div><div class="teaser830"></div></div></div>');
				
				$(".instrumentOverlay .popUpDataContainer").find(".darkblueband").css("background-color",changeColor);
	
				tabListEntity = personaWorkflowEntity[instrumentHotspotIndex].tabList;
				
				displaytabListEntity();
			}

			$('.closePopupBtn').click(function(){
				$(".instrumentOverlay").slideUp();
			})
		}
	
		
//Workflow List//
		
		/************************************************ Workflow List *********************************************/
		
		for(j=1;j<=Object.keys(workflowList).length;j++){
				$(".labContainer").append('<div class="labHotspot" id="labHotspot'+j+'" workflowItemIndex="'+j+'"><div class="workflowName">'+workflowList[j].workflowName+'</div><div class="hotspotBtn" style="background-image:url('+workflowList[j].workflowIcon+')"><div class="pulseButton -pulse1">&nbsp;</div><div class="pulseButton -pulse2">&nbsp;</div></div></div>');

			$(".labContainer").find("#labHotspot"+j).on("click",function(){
				selectWorkflowSlide();
				setInstrument($(this).attr("workflowItemIndex"));
			})
		}
	
		
		/***************************************** Set Workflow dropdown list *****************************************/

		function setWorkflow(workflowItemIndex){
			
			//workflowItemIndex = $(setWorkflowInstrument).attr("workflowItemIndex");
			$('.selectWorkflow').html(workflowList[workflowItemIndex].workflowName);
			
			$('.workflowPanel').empty();
			$(".instrumentContainer").find(".navigationPanel").empty();
	
			for(i=1;i<=Object.keys(workflowList).length;i++){
				
				if(workflowItemIndex!=i){
					
					$("#personaPanel .bandContent").find(".workflowContainer .workflowPanel").append('<div class="workflowItem navigationItem" workflowItemIndex="'+i+'">'+workflowList[i].workflowName+'</div>');
					
					$(".instrumentContainer").find(".navigationPanel").append('<div class="navigationBtn navigationItem" id="navigationItem'+i+'" workflowItemIndex="'+i+'">'+workflowList[i].workflowName+'</div>');
					
					$('.navigationItem').click(function(){
					  
						$('.workflowPanel').slideUp();
						setInstrument($(this).attr("workflowItemIndex"));
					})
				}
			}	
		}
		
		/***************************************** set lab and instrument *****************************************/
		
		function setInstrument(workflowItemIndex){
			//workflowItemIndex = $(setInstrumentWorkflow).attr("workflowItemIndex");
			
			$('.instrumentContainer').find(".instrumentlab").remove();
			$(".instrumentContainer").append('<div class="instrumentlab" id="instrumentlab'+workflowItemIndex+'"><img src="'+workflowList[workflowItemIndex].labImg+'"</div>');

			$('.instrumentContainer .instrumentlab').animate({
                left: "0px",
            },500);
			
			$(".infoContainerDiv").empty();
			$(".infoIcon").removeClass("without-after-element infoClose");
			$(".infoOverlay").show();
			
			if(workflowList[workflowItemIndex].valueProposition){
				$(".infoContainerDiv").append('<div class="contentDiv"><div class="contentDivHeader"><div class="headerIcon"><img  src="images/Value_preposition_icon.png"></div><div class="contentDivHeading">Our Strength</div></div><div class="contentDivInfo">'+workflowList[workflowItemIndex].valueProposition+'</div></div>');
				
				if(workflowItemIndex==3){
					$(".infoContainerDiv").css("height","250px");
				}
			}
			
			if(workflowList[workflowItemIndex].agilentOfferings){
				$(".infoContainerDiv").append('<div class="contentDiv"><div class="contentDivHeader"><div class="headerIcon"><img  src="images/Agilent_offering_icon.png"></div><div class="contentDivHeading">Our Offerings</div></div><div class="contentDivInfo">'+workflowList[workflowItemIndex].agilentOfferings+'</div></div>');
			}
			
			$(".infoContainerDiv").slideDown(500);
			
			setWorkflow(workflowItemIndex);
			
			workflowListEntity = workflowList[workflowItemIndex].instrumentList;
					
			for(j=0;j<workflowListEntity.length;j++){
				if(workflowListEntity[j].instrumentSubList){
					$(".instrumentContainer").find(".instrumentlab").append('<div class="instrumentHotspot instrumentHotspot'+workflowItemIndex+'" id="instrumentHotspot'+workflowItemIndex+j+'"><div class="workflowName" id="workflowName'+j+'" instrumentHotspotIndex="'+j+'" workflowItemIndex="'+workflowItemIndex+'">'+workflowListEntity[j].instrumentSubList[0].intrumentHotspotName+'</div><div class="line"></div></div>');
				}
					
				else{
					$(".instrumentContainer").find(".instrumentlab").append('<div class="instrumentHotspot instrumentHotspot'+workflowItemIndex+'" id="instrumentHotspot'+workflowItemIndex+j+'" ><div class="workflowName" id="workflowName'+j+'" instrumentHotspotIndex="'+j+'" workflowItemIndex="'+workflowItemIndex+'">'+workflowListEntity[j].intrumentHotspotName+'</div><div class="line"></div></div>');
				}

				
				$('#workflowName'+j).click(function(){
					displayInstrumentContent($(this))
				})
			}
		}
		
		/***************************************** display Instrument's Content *****************************************/
		
		function displayInstrumentContent(instrumentTab){
			instrumentHotspotIndex = $(instrumentTab).attr("instrumentHotspotIndex");
			workflowItemIndex = $(instrumentTab).attr("workflowItemIndex");
			
			$('.workflowPanel').slideUp();
					
			$(".instrumentOverlay").slideDown();
			
			$(".instrumentOverlay").find(".popUpDataContainer").empty();				
			
			workflowtabListEntity = workflowList[workflowItemIndex].instrumentList;
			
			subListEntity = workflowList[workflowItemIndex].instrumentList[instrumentHotspotIndex].instrumentSubList;
			
			changeColor = workflowList[workflowItemIndex].bgColor;
			
			if(subListEntity){
				displaySubListEntity();
			}
			
			else{
				
				$(".instrumentOverlay .popUpDataContainer").append('<div class="instrumentInfo"><div class="instrumentInfoContainer"><div class="imgContainer"><img src="'+workflowtabListEntity[instrumentHotspotIndex].instrumentImg+'"></div><div class="infoContainer">'+workflowtabListEntity[instrumentHotspotIndex].instrumentInfo+'</div></div><div class="band darkblueband"></div><div class="band lightblueband"></div></div><div class="instrumentTabInfo"><div class="headingContainer"><div class="instrumentHeading">'+workflowtabListEntity[instrumentHotspotIndex].instrumentTitle+'</div><div class="closePopupBtn"></div></div><div id="popUpData"><div class="tabList"></div><div class="teaser830"></div></div></div>');
				
				$(".instrumentOverlay .popUpDataContainer").find(".darkblueband").css("background-color",changeColor);
				
				tabListEntity = workflowtabListEntity[instrumentHotspotIndex].tabList;
				
				displaytabListEntity();
			}
			
			$('.closePopupBtn').click(function(){
				$(".instrumentOverlay").slideUp();
			})
		}
		
		function displayTabInfo(tab){
			tabindex = tab.attr('tabIndex');
			workflowItemIndex=tab.attr('workflowItemIndex');
			$("#popUpData").find(".teaser830").empty();
			
			$(".instrumentOverlay").find(".popUpDataContainer .instrumentTabInfo").find("#popUpData").find(".teaser830").html(workflowtabListEntity[tabindex].tabInfo);
					
			$("#tabCaption"+tabindex).addClass("tabCaptionselected");
		}
		
		/************************************************ Common actions/functions ************************************************/
	
		function selectWorkflowSlide(){
			$(".animaImg").animate({left: $(".labContainer").outerWidth()},500);
					
			$(".personaBtnPanel,.labContainer,.labHotspot,.personaContainer").hide();
					
			$(".instrumentContainer,.bandContent").show();
					
			$("#personaPanel .bandContent").append('<div class="workflowContainer"><div class="selectWorkflowContainer"><div class="workflowSelectBox"><div class="selectWorkflow"></div><div class="workflowIcon"></div></div><div class="workflowPanel"></div></div><div class="homeIcon"></div><div class="infoIcon"><div class="infoContainerDiv"></div></div></div>');
					
			$('.workflowSelectBox').click(function(){
				if(!$(this).parent().find(".workflowIcon").hasClass('workflowIconChange')){
					$(this).parent().find(".workflowIcon").addClass('workflowIconChange');
				}
						
				else{
					$(this).parent().find(".workflowIcon").removeClass('workflowIconChange');
				}
			   
				$('.workflowPanel').slideToggle(150);	
			})
			
			
			$('.homeIcon').click(function(){

				$(".animaImg").animate({
					left: "0px",
				},800);
				
				setTimeout(function(){
					$(".labHotspot").fadeIn(1000);
				},1000);
				
				
				$(".instrumentContainer,.bandContent").hide();
				$("#personaPanel").find(".workflowContainer").remove();
				$("#personaPanel").find(".perosnaInfo").remove();
				
				$("#personaPanel").css({"background-image":"url(images/band.png)","background-size":"auto"});
				
				$(".personaBtnPanel,.labContainer,.personaContainer").show();
				
			})

			$('.infoIcon').click(function(){
				$(".infoContainerDiv").slideToggle();
				if(!$(this).hasClass("infoClose")){
					$(this).addClass("without-after-element infoClose");
					$(".infoOverlay").hide();
				}
				else{
					$(this).removeClass("without-after-element infoClose");
					$(".infoOverlay").show();
				}
				
				if($(".workflowPanel").is(':visible')){
					$('.workflowPanel').slideUp();
					if(!$(".workflowIcon").hasClass('workflowIconChange')){
						$(".workflowIcon").addClass('workflowIconChange');
					}
								
					else{
						$(".workflowIcon").removeClass('workflowIconChange');
					}
				}
			})
		}
		
		$('.instrumentContainer').click(function(){
			
			//$(".workflowIcon").addClass('workflowIconChange');
			if($(".workflowPanel").is(':visible')){
				$('.workflowPanel').slideUp();
				if(!$(".workflowIcon").hasClass('workflowIconChange')){
					$(".workflowIcon").addClass('workflowIconChange');
				}
							
				else{
					$(".workflowIcon").removeClass('workflowIconChange');
				}
			}
			
		});
		
		function displaySubListEntity(){
			$(".instrumentOverlay .popUpDataContainer").append('<div class="instrumentInfo"><div class="instrumentInfoContainer"><div class="imgContainer"><img src="'+subListEntity[0].instrumentImg+'"></div><div class="infoContainer">'+subListEntity[0].instrumentInfo+'</div></div><div class="band darkblueband"></div><div class="band lightblueband"></div></div><div class="instrumentTabInfo"><div class="mainTabContainer"><div class="mainTabs"></div><div class="closePopupBtn"></div></div><div id="popUpData"><div class="tabList"></div><div class="teaser830"></div></div></div>');
			
			$(".instrumentOverlay .popUpDataContainer").find(".darkblueband").css("background-color",changeColor);
									
			tabListEntity = subListEntity[0].tabList;
				
			displaytabListEntity();
				
			for(k=0;k<subListEntity.length;k++){

				$(".instrumentOverlay").find(".popUpDataContainer .instrumentTabInfo .mainTabContainer .mainTabs").append('<div class="mainTabCaption" id="mainTabCaption'+k+'" mainTabIndex="'+k+'" workflowItemIndex="'+workflowItemIndex+'" instrumentHotspotIndex="'+instrumentHotspotIndex+'">'+subListEntity[k].instrumentTitle+'</div>');
						
				$(".instrumentOverlay").find(".popUpDataContainer .instrumentTabInfo").find("#popUpData").find(".teaser830").html(subListEntity[0].tabList[0].tabInfo);
							
				$("#mainTabCaption"+0).addClass("mainTabCaptionselected");
							
				$("#mainTabCaption"+k).click(function(){
					$(this).addClass("mainTabCaptionselected");
					$(this).siblings().removeClass("mainTabCaptionselected");
	
					displayMainTablistEntity($(this));
				})
			}
		}
		
		function displayMainTablistEntity(mainTab){
			mainTabIndex = $(mainTab).attr("mainTabIndex");
			
			tabListEntity = subListEntity[mainTabIndex].tabList;
				
			displaytabListEntity(mainTabIndex);
			
			$(".instrumentOverlay").find(".popUpDataContainer .instrumentInfoContainer .imgContainer").find("img").attr("src",subListEntity[mainTabIndex].instrumentImg);
			
			$(".instrumentOverlay").find(".popUpDataContainer .instrumentInfoContainer").find(".infoContainer").html(subListEntity[mainTabIndex].instrumentInfo);	
			
			if(subListEntity[mainTabIndex].disclaimer == true){
				$(".instrumentOverlay").find(".popUpDataContainer .instrumentTabInfo").find("#popUpData").find(".teaser830").append('<div class="disclaimerTxt">'+subListEntity[mainTabIndex].disclaimerTxt+'</div>');
			}			
		}
		
		function displaytabListEntity(mainTabIndex){
			if(tabListEntity){
				$(".instrumentOverlay").find(".popUpDataContainer .instrumentTabInfo").find("#popUpData").find(".tabList").empty();
				for(k=0;k<tabListEntity.length;k++){

					$(".instrumentOverlay").find(".popUpDataContainer .instrumentTabInfo").find("#popUpData").find(".tabList").append('<div class="tabCaption" id="tabCaption'+k+'" tabIndex="'+k+'" workflowItemIndex="'+workflowItemIndex+'" instrumentHotspotIndex="'+instrumentHotspotIndex+'" mainTabIndex="'+mainTabIndex+'">'+tabListEntity[k].tabName+'</div>');
					
					$(".instrumentOverlay").find(".popUpDataContainer .instrumentTabInfo").find("#popUpData").find(".teaser830").html(tabListEntity[0].tabInfo);

					$("#tabCaption"+0).addClass("tabCaptionselected");
					
					$("#tabCaption"+k).click(function(){
						
						$(this).addClass("tabCaptionselected");
						$(this).siblings().removeClass("tabCaptionselected");
						displayPersonaTabInfo($(this));
					})
				}
			}
		}
		
		function displayPersonaTabInfo(tab){
			tabindex = tab.attr('tabIndex');
			mainTabIndex = tab.attr('mainTabIndex');
			workflowItemIndex=tab.attr('workflowItemIndex');
			$("#popUpData").find(".teaser830").empty();
			
			$(".instrumentOverlay").find(".popUpDataContainer .instrumentTabInfo").find("#popUpData").find(".teaser830").html(tabListEntity[tabindex].tabInfo);
					
			$("#tabCaption"+tabindex).addClass("tabCaptionselected");
			
			if(subListEntity[mainTabIndex].disclaimer == true){
				$(".instrumentOverlay").find(".popUpDataContainer .instrumentTabInfo").find("#popUpData").find(".teaser830").append('<div class="disclaimerTxt">'+subListEntity[mainTabIndex].disclaimerTxt+'</div>');
			}
		}
	});
})(jQuery);