package com.phc.priorityranking.agent;

import com.phc.priorityranking.model.PHC;
import org.springframework.stereotype.Component;

/**
 * Evaluates staffing shortages at a PHC: doctors and nurses
 * available vs. required. Bigger shortfall -> higher urgency score.
 */
@Component
public class StaffingAgent implements Agent {

    @Override
    public double evaluate(PHC phc) {
        double doctorGapRatio = gapRatio(phc.getDoctorsAvailable(), phc.getDoctorsRequired());
        double nurseGapRatio = gapRatio(phc.getNursesAvailable(), phc.getNursesRequired());

        // Doctors weighted slightly higher than nurses
        double score = (doctorGapRatio * 60) + (nurseGapRatio * 40);
        score = Math.min(100, Math.max(0, score));

        phc.setStaffingScore(score);
        return score;
    }

    /**
     * Returns a 0-1 ratio representing how severe the staffing gap is.
     * 0 = fully staffed, 1 = completely unstaffed.
     */
    private double gapRatio(int available, int required) {
        if (required <= 0) return 0;
        double gap = required - available;
        return Math.min(1.0, Math.max(0.0, gap / required));
    }
}
