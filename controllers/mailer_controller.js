const nodemailer = require("nodemailer")

// POST REQUEST
exports.standardMail = (req, res) => {
  console.log(req.body)
  const estimate = req.body


  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'trizmocalifornia@yahoo.com',
      pass: ""
    }

  });

  const mailOptions = {
    from: 'trizmocalifornia@yahoo.com',
    to: 'tristan.e.perera@gmail.com',
    // to: ["bwilson@poollogicdesigns.com", "tristan.e.perera@gmail.com"],
    subject: 'Pool Logic - Estimate',
    text: "\n" + estimate.clientName +
      "\n" + estimate.address1 +
      "\n" + estimate.city + " " + estimate.state + " " + estimate.zipCode +
      "\n\n" + "Project Manager: " + estimate.projectManager +
      "\n" + "Plans: " + estimate.plans +
      "\n" + "Engineering: " + estimate.engineering +
      "\n\n" + "Pool Length: " + estimate.poolLength +
      "\n" + "Pool Width: " + estimate.poolWidth +
      "\n" + "Pool Ave Depth: " + estimate.poolAveDepth +
      "\n\n" + "Spa Length: " + estimate.spaLength +
      "\n" + "Spa Width: " + estimate.spaWidth +
      "\n" + "Spa Ave Depth: " + estimate.spaAveDepth +
      "\n\n\n\n" + "=== EXCAVATION ===" +
      "\n" + "Excavation Main Location: " + estimate.excavationMainLocation +
      "\n" + "Excavation Main SquareFoot: " + estimate.excavationMainSquareFoot +
      "\n" + "Excavation Estimate: $ " + estimate.excavtionEstimate +
      "\n\n" + "Excavation Zone: " + estimate.excavationZone +
      "\n\n" + "Excavation Demo: " + estimate.excavationDemo +
      "\n" + "Excavation Demo Estimate: $ " + estimate.excavationDemoEstimate +
      "\n\n" + "Excavation Sod: " + estimate.excavationSod +
      "\n" + "Excavation Sod Estimate: $ " + estimate.excavationSodEstimate +
      "\n\n" + "Excavation Concrete Demo: " + estimate.excavationConcreteDemo +
      "\n" + "Excavation Concrete Demo Estimate: $ " + estimate.excavationConcreteDemoEstimate +
      "\n\n" + "Excavation Grading: " + estimate.excavationGrading +
      "\n" + "Excavation Grading Estimate: $ " + estimate.excavationGradingEstimate +
      "\n" + "Excavation Deep Ramp: " + estimate.excavationDeepRamp +
      "\n" + "Excavation Rock Area: " + estimate.excavationRockArea +
      "\n\n" + "Excavation Day Of Dig: " + estimate.excavationDayOfDig +
      "\n" + "Excavation Day Of Dig Estimate: $ " + estimate.excavationDayOfDigEstimate +
      "\n\n" + "Excavation Steel Location: " + estimate.excavationSteelLocation +
      "\n" + "Excavation Steel Squarefoot: " + estimate.excavationSteelSquareFoot +
      "\n" + "Excavation Steel Squarefoot Estimate: $ " + estimate.excavationSteelSquareFootEstimate +
      "\n\n\n\n" + "=== PLUMBING AND ELECTRICAL ===" +
      "\n" + "Plumbing Type: " + estimate.plumbingType +
      "\n" + "Plumbing Length: " + estimate.plumbingLength +
      "\n" + "Plumbing Length Estimate: $ " + estimate.plumbingLengthEstimate +
      "\n\n" + "Gas Length: " + estimate.gasLength +
      "\n" + "Gas Length Estimate: $ " + estimate.gasLengthEstimate +
      "\n\n" + "Electrical Length: " + estimate.electricalLength +
      "\n" + "Electrical Length Estimate: $ " + estimate.electricalLengthEstimate +
      "\n\n" + "Stubs Outlets: $ " + estimate.stubsOutlets +
      "\n" + "Dedicated Suction: $ " + estimate.dedicatedSuction +
      "\n" + "Bonding Wire: $ " + estimate.bondingWire +
      "\n" + "Saw Cut: $ " + estimate.sawCut +
      "\n\n\n\n" + "=== SHOTCRETE ===" +
      "\n" + "DeputyInspection: $ " + estimate.deputyInspection +
      "\n" + "Shotcrete Location: " + estimate.shotcreteLocation +
      "\n\n" + "Shotcrete CubicYards: " + estimate.shotcreteCubicYards.toFixed(2) +
      "\n" + "Shotcrete Estimate: $ " + estimate.shotcreteEstimate.toFixed(2) +
      "\n\n\n\n" + "=== MASONRY ===" +
      "\n" + "Tile Coping: " + estimate.tileCoping +
      "\n" + "Tile Coping Estimate: $ " + estimate.tileCopingEstimate +
      "\n" + "Double Bullnose: " + estimate.doubleBullnose +
      "\n\n" + "Decking Type: " + estimate.deckingType +
      "\n" + "Decking Square Foot: " + estimate.deckingSquareFoot +
      "\n" + "Decking Square Foot Estimate: $ " + estimate.deckingSquareFootEstimate +
      "\n\n" + "masonryRetainingWall: " + estimate.masonryRetainingWall +
      "\n" + "masonryRetainingWall Estimate: $ " + estimate.masonryRetainingWallEstimate +
      "\n\n" + "masonryCMUWall: " + estimate.masonryCMUWall +
      "\n" + "masonryCMUWall Estimate: $ " + estimate.masonryCMUWallEstimate +
      "\n\n" + "Masonry1 Type: " + estimate.masonry1Type +
      "\n" + "Masonry1 Square Footage: " + estimate.masonry1TypeSquareFoot +
      "\n" + "Masonry1 Square Foot Estimate: $ " + estimate.masonry1TypeSquareFootEstimate +
      "\n\n" + "Masonry Cleanup: " + estimate.masonryCleanup +
      "\n\n" + "Plaster Type: " + estimate.plasterType +
      "\n" + "Plaster Length: " + estimate.plasterLength +
      "\n" + "Plaster Length Estimate: $ " + estimate.plasterLengthEstimate +
      "\n\n" + "Bags Of Glass: " + estimate.bagsOfGlass +
      "\n" + "Bags Of Glass Estimate: $ " + estimate.bagsOfGlassEstimate +
      "\n" + "Bags Of Abalone: " + estimate.bagsOfAbalone +
      "\n" + "Bags Of Abalone Estimate: $ " + estimate.bagsOfAbaloneEstimate +
      "\n\n" + "Plaster StartUp: " + estimate.plasterStartUp +
      "\n" + "Plaster Mastic: " + estimate.plasterMastic +
      "\n\n\n\n" + "=== ADDITIONS ===" +
      "\n" + "Manual Ignition FireBowl: " + estimate.manualIgnitionFireBowl +
      "\n" + "Manual Ignition FireBowl Estimate: $ " + estimate.manualIgnitionFireBowlEstimate +
      "\n" + "Electronic Ignition Fire Bowl: " + estimate.electronicIgnitionFireBowl +
      "\n" + "Electronic Ignition Fire Bowl Estimate: $ " + estimate.electronicIgnitionFireBowlEstimate +
      "\n\n" + "Sheer Decent: " + estimate.sheerDecent +
      "\n" + "Sheer Decent Estimate: $ " + estimate.sheerDecentEstimate +
      "\n" + "Sheer Decent Pumps: " + estimate.sheerDecentPumps +
      "\n" + "Sheer Decent PumpsEstimate: $ " + estimate.sheerDecentPumpsEstimate +
      "\n" + "Sheer Decent Runs: " + estimate.sheerDecentRuns +
      "\n" + "Sheer Decent RunsEstimate: $ " + estimate.sheerDecentRunsEstimate +
      "\n\n" + "Barbecues: " + estimate.barbecues +
      "\n" + "Barbecues Estimate: $ " + estimate.barbecuesEstimate +
      "\n\n\n\n" + "=== TOTALS ===" +
      "\n" + "Excavation Total: $ " + estimate.excavationTotal.toFixed(2) +
      "\n" + "Plumbing and Electrial: $ " + estimate.plumbElectTotal.toFixed(2) +
      "\n" + "Shotcrete: $ " + estimate.shotcreteTotal.toFixed(2) +
      "\n" + "Masonry: $ " + estimate.masonryTotal.toFixed(2) +
      "\n" + "Additions: $ " + estimate.additionsTotal.toFixed(2) +
      "\n\n" + "Sub Total: $ " + estimate.subtotal.toFixed(2) +
      "\n" + "Profits: $ " + estimate.profit.toFixed(2) +
      "\n" + "Grand Total: $ " + estimate.grandTotal.toFixed(2)
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);

    }
  });

  res.json({
    success: true
  })

}
