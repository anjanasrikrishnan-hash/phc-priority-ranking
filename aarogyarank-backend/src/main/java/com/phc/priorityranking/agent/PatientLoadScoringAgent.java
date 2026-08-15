package com.phc.priorityranking.agent;

import com.phc.priorityranking.model.Phc;
import org.springframework.stereotype.Component;

@Component
public class PatientLoadScoringAgent implements ScoringAgent {

    @Override
    public double score(Phc phc) {

        // Patient pressure based on daily patients vs bed capacity
        double bedPressure =
                (double) phc.getDailyPatients()
                        / phc.getBedCapacity();

        // Convert bed pressure into a score from 0 to 100
        double bedPressureScore = Math.min(bedPressure / 10.0, 1.0) * 100;

        // Distance to nearest hospital
        double distanceScore =
                Math.min(phc.getDistanceToHospitalKm() / 30.0, 1.0) * 100;

        // Final Patient Load score
        return (bedPressureScore + distanceScore) / 2;
    }

    @Override
    public String dimensionName() {
        return "Patient Load";
    }
}