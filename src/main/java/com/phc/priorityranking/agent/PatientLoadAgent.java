package com.phc.priorityranking.agent;

import com.phc.priorityranking.model.PHC;
import org.springframework.stereotype.Component;

/**
 * Evaluates patient demand pressure on a PHC:
 * how many patients per available bed, and how far
 * patients would have to travel if this PHC underperforms.
 * Higher load + more remote -> higher urgency score.
 */
@Component
public class PatientLoadAgent implements Agent {

    @Override
    public double evaluate(PHC phc) {
        // Patients per bed ratio (capped contribution at 60 points)
        double bedCapacity = Math.max(1, phc.getBedCapacity()); // avoid divide-by-zero
        double patientsPerBed = phc.getMonthlyPatientCount() / bedCapacity;
        double loadUrgency = Math.min(60, patientsPerBed * 1.5);

        // Remoteness: farther from the nearest hospital = more critical this PHC works well
        double remotenessUrgency = Math.min(40, phc.getDistanceToNearestHospitalKm() * 0.8);

        double score = loadUrgency + remotenessUrgency;
        score = Math.min(100, Math.max(0, score));

        phc.setPatientLoadScore(score);
        return score;
    }
}
