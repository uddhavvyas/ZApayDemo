sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
], function(Controller,ChartFormatter,Format ) {
	"use strict";
	var previousId;
	return Controller.extend("zApayDemo.controller.View1", {
			onInit: function(){
				
			previousId = this.getView().byId("Allbtn");
			previousId.setType("Emphasized");
			var DetailModel = new sap.ui.model.json.JSONModel();
			DetailModel = this.getOwnerComponent().getModel("All");
			this.getView().setModel(DetailModel);
			this.getView().byId("numId1").setValue("2596");
				this.getView().byId("numId2").setValue("64%");
			 	this.getView().byId("numId3").setValue("8d");
			 	this.getView().byId("numId4").setValue("28%");
			 	this.getView().byId("numId5").setValue("35%");
			 	this.getView().byId("numId6").setValue("2596");
				this.getView().byId("numId7").setValue("64%");
			 	this.getView().byId("numId8").setValue("8d");
			 	this.getView().byId("numId9").setValue("28%");
			 	this.getView().byId("numId10").setValue("35%");
			
			if (sap.ui.Device.system.desktop || (sap.ui.Device.system.tablet && sap.ui.Device.orientation.landscape)){
				this.getView().byId("idDeskPanel").setVisible(true);
				this.getView().byId("idHboxDesk").setVisible(true);
				this.getView().byId("ProductList").setVisible(true);
				
			}
			else{
				this.getView().byId("idMobPanel").setVisible(true);
				this.getView().byId("idVboxMob").setVisible(true);
				this.getView().byId("idVizFrame").setWidth("100%").addStyleClass("sapUiNoMarginBegin sapUiSmallMarginBegin");
				this.getView().byId("ProductListMob").setVisible(true);
			}
			Format.numericFormatter(ChartFormatter.getInstance());
			var formatPattern = ChartFormatter.DefaultPattern;
			var oVizFrame = this.getView().byId("idVizFrame");
			var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
		},
		onPressMenuBtn: function(oEvent){
			var sText = oEvent.getSource().getText();
			
			/*for Mobile */ this.getView().byId("objMob").setVisible(true).setText(sText);
			
			var DetailModel = new sap.ui.model.json.JSONModel();
			 if(sText === "1 Day"){
			 	previousId.setType("Transparent");
			 	previousId = oEvent.getSource();
			 	previousId.setType("Emphasized");
			 	DetailModel = this.getOwnerComponent().getModel("1Day");
			 	this.getView().byId("numId1").setValue("6895");
			 	this.getView().byId("numId6").setValue("6895");
			 	this.getView().byId("numId2").setValue("86%");
			 	this.getView().byId("numId7").setValue("86%");
			 	this.getView().byId("numId3").setValue("6d");
			 	this.getView().byId("numId8").setValue("6d");
			 	this.getView().byId("numId4").setValue("36%");
			 	this.getView().byId("numId9").setValue("36%");
			 	this.getView().byId("numId5").setValue("32%");
			 	this.getView().byId("numId10").setValue("32%");
			 	
			 }
			else if(sText === "5 Days"){
				previousId.setType("Transparent");
			 	previousId = oEvent.getSource();
			 	previousId.setType("Emphasized");
				DetailModel = this.getOwnerComponent().getModel("5Day");
				this.getView().byId("numId1").setValue("1231");
				this.getView().byId("numId6").setValue("1231");
				this.getView().byId("numId2").setValue("23%");
				this.getView().byId("numId7").setValue("23%");
			 	this.getView().byId("numId3").setValue("5.5d");
			 	this.getView().byId("numId8").setValue("5.5d");
			 	this.getView().byId("numId4").setValue("56%");
			 	this.getView().byId("numId9").setValue("56%");
			 	this.getView().byId("numId5").setValue("23%");
			 	this.getView().byId("numId10").setValue("23%");
			}
			else if(sText === "1 Month"){
				previousId.setType("Transparent");
			 	previousId = oEvent.getSource();
			 	previousId.setType("Emphasized");
				DetailModel = this.getOwnerComponent().getModel("1Month");
				this.getView().byId("numId1").setValue("1226");
				this.getView().byId("numId6").setValue("1226");
				this.getView().byId("numId2").setValue("32%");
				this.getView().byId("numId7").setValue("32%");
			 	this.getView().byId("numId3").setValue("6d");
			 	this.getView().byId("numId8").setValue("6d");
			 	this.getView().byId("numId4").setValue("65%");
			 	this.getView().byId("numId9").setValue("65%");
			 	this.getView().byId("numId5").setValue("10%");
			 	this.getView().byId("numId10").setValue("10%");
			}
			else if(sText === "6 Month"){
				previousId.setType("Transparent");
			 	previousId = oEvent.getSource();
			 	previousId.setType("Emphasized");
				DetailModel = this.getOwnerComponent().getModel("6Month");
				this.getView().byId("numId1").setValue("1863");
				this.getView().byId("numId6").setValue("1863");
				this.getView().byId("numId2").setValue("28%");
				this.getView().byId("numId7").setValue("28%");
			 	this.getView().byId("numId3").setValue("7d");
			 	this.getView().byId("numId8").setValue("7d");
			 	this.getView().byId("numId4").setValue("59%");
			 	this.getView().byId("numId9").setValue("59%");
			 	this.getView().byId("numId5").setValue("9%");
			 	this.getView().byId("numId10").setValue("9%");
				
			}
			else if(sText === "1 Year"){
				previousId.setType("Transparent");
			 	previousId = oEvent.getSource();
			 	previousId.setType("Emphasized");
				DetailModel = this.getOwnerComponent().getModel("1Year");
				this.getView().byId("numId1").setValue("2023");
				this.getView().byId("numId2").setValue("82%");
			 	this.getView().byId("numId3").setValue("5d");
			 	this.getView().byId("numId4").setValue("48%");
			 	this.getView().byId("numId5").setValue("15%");
			 	this.getView().byId("numId6").setValue("2023");
				this.getView().byId("numId7").setValue("82%");
			 	this.getView().byId("numId8").setValue("5d");
			 	this.getView().byId("numId9").setValue("48%");
			 	this.getView().byId("numId10").setValue("15%");
			}
			else if(sText === "YTD"){
				previousId.setType("Transparent");
			 	previousId = oEvent.getSource();
			 	previousId.setType("Emphasized");
				DetailModel = this.getOwnerComponent().getModel("YTD");
				this.getView().byId("numId1").setValue("2339");
				this.getView().byId("numId2").setValue("39%");
			 	this.getView().byId("numId3").setValue("4d");
			 	this.getView().byId("numId4").setValue("63%");
			 	this.getView().byId("numId5").setValue("19%");
			 	this.getView().byId("numId6").setValue("2339");
				this.getView().byId("numId7").setValue("39%");
			 	this.getView().byId("numId8").setValue("4d");
			 	this.getView().byId("numId9").setValue("63%");
			 	this.getView().byId("numId10").setValue("19%");
			}
			else if(sText === "All"){
				previousId.setType("Transparent");
			 	previousId = oEvent.getSource();
			 	previousId.setType("Emphasized");
				DetailModel = this.getOwnerComponent().getModel("All");
				this.getView().setModel(DetailModel);
				this.getView().byId("numId1").setValue("2596");
				this.getView().byId("numId2").setValue("64%");
			 	this.getView().byId("numId3").setValue("8d");
			 	this.getView().byId("numId4").setValue("28%");
			 	this.getView().byId("numId5").setValue("35%");
			 	this.getView().byId("numId6").setValue("2596");
				this.getView().byId("numId7").setValue("64%");
			 	this.getView().byId("numId8").setValue("8d");
			 	this.getView().byId("numId9").setValue("28%");
			 	this.getView().byId("numId10").setValue("35%");
			}
			this.getView().setModel(DetailModel);
			this.getView().byId("idVizFrame").setVisible(true);
			//this.getView().setModel(DetailModel,"DetailModel");	
		}
	});
});