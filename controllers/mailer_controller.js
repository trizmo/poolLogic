const nodemailer = require("nodemailer")

// POST REQUEST
exports.standardMail = (req, res) => {
  console.log(req.body)
  const estimate = req.body


  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'trizmocalifornia@yahoo.com',
      // user: ["bwilson@poollogicdesigns.com", "trizmocalifornia@yahoo.com"],
      pass: "Elijah123!"
    }

  });

  const mailOptions = {
    from: 'trizmocalifornia@yahoo.com',
    // to: 'tristan.e.perera@gmail.com',
    to: ["bwilson@poollogicdesigns.com", "tristan.e.perera@gmail.com"],
    subject: 'Pool Logic - Estimate',
    text: "\n" + "Client Name: " + estimate.clientName +
      "\n" + "Address1: " + estimate.address1 +
      "\n" + "City: " + estimate.city +
      "\n" + "State: " + estimate.state +
      "\n" + "Zip: " + estimate.zipCode +
      "\n" + "Project Manager: " + estimate.projectManager +
      "\n" + "Plans: " + estimate.plans +
      "\n" + "Engineering: " + estimate.engineering +
      "\n\n\n\n" + "Excavation" +
      "\n" + "Excavation Main Location: " + estimate.excavationMainLocation +
      "\n" + "Excavation Main SquareFoot: " + estimate.excavationMainSquareFoot +
      "\n" + "Excavation Zone: " + estimate.excavationZone +
      "\n" + "Excavation Demo: " + estimate.excavationDemo +
      "\n" + "Excavation Sod: " + estimate.excavationSod +
      "\n" + "Excavation Concrete Demo: " + estimate.excavationConcreteDemo +
      "\n" + "Excavation Grading: " + estimate.excavationGrading +
      "\n" + "Excavation Deep Ramp: " + estimate.excavationDeepRamp +
      "\n" + "Excavation Rock Area: " + estimate.excavationRockArea +
      "\n" + "Excavation Day Of Dig: " + estimate.excavationDayOfDig +
      "\n" + "Excavation Steel Location: " + estimate.excavationSteelLocation +
      "\n\n\n\n" + "Plumbing and Electrical" +
      "\n" + "Plumbing Type: " + estimate.plumbingType +
      "\n" + "Plumbing Length: " + estimate.plumbingLength +
      "\n" + "Gas Length: " + estimate.gasLength +
      "\n" + "Electrical Length: " + estimate.electricalLength +
      "\n" + "Stubs Outlets: " + estimate.stubsOutlets +
      "\n" + "Dedicated Suction: " + estimate.dedicatedSuction +
      "\n" + "Bonding Wire: " + estimate.bondingWire +
      "\n" + "Saw Cut: " + estimate.sawCut +
      "\n\n\n\n" + "Shotcrete" +
      "\n" + "DeputyInspection: " + estimate.deputyInspection +
      "\n" + "Shotcrete Location: " + estimate.shotcreteLocation +
      "\n" + "Shotcrete Perimeter: " + estimate.shotcretePerimeter +
      "\n" + "Shotcrete Average Depth: " + estimate.shotcreteAveDepth +
      "\n" + "Shotcrete Surface Area: " + estimate.shotcreteSurfaceArea +
      "\n" + "Shotcrete Cubic Yards: " + estimate.shotcreteCubicYards +
      "\n\n\n\n" + "Masonry" +
      "\n" + "Tile Coping: " + estimate.tileCoping +
      "\n" + "Double Bullnose: " + estimate.doubleBullnose +
      "\n" + "Decking Type: " + estimate.deckingType +
      "\n" + "Decking Square Foot: " + estimate.deckingSquareFoot +
      "\n" + "Masonry1 Type: " + estimate.masonry1Type +
      "\n" + "Masonry Cleanup: " + estimate.masonryCleanup +
      "\n" + "Plaster Type: " + estimate.plasterType +
      "\n" + "Plaster Length: " + estimate.plasterLength +
      "\n" + "Bags Of Glass: " + estimate.bagsOfGlass +
      "\n" + "Bags Of Abalone: " + estimate.bagsOfAbalone +
      "\n" + "Plaster StartUp: " + estimate.plasterStartUp +
      "\n" + "Plaster Mastic: " + estimate.plasterMastic +
      "\n\n\n\n" + "Additions Costs" +
      "\n" + "Manual Ignition FireBowl: " + estimate.manualIgnitionFireBowl +
      "\n" + "Electronic Ignition Fire Bowl: " + estimate.electronicIgnitionFireBowl +
      "\n" + "Sheer Decent: " + estimate.sheerDecent +
      "\n" + "Sheer Decent Pumps: " + estimate.sheerDecentPumps +
      "\n" + "Sheer Decent Runs: " + estimate.sheerDecentRuns +
      "\n" + "Barbecues: " + estimate.barbecues +
      "\n\n\n\n" + "Totals" +
      "\n" + "Excavation Total: " + estimate.excavationTotal +
      "\n" + "Plumbing and Electrial: " + estimate.plumbElectTotal +
      "\n" + "Shotcrete: " + estimate.shotcreteTotal +
      "\n" + "Masonry: " + estimate.masonryTotal +
      "\n" + "Additions: " + estimate.additionsTotal +
      "\n" + "Grand Total: " + estimate.grandTotal
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}