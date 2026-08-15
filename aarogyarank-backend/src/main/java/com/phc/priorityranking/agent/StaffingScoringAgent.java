package com.phc.priorityranking.agent;

import com.phc.priorityranking.model.Phc;
import org.springframework.stereotype.Component;

@Component
public class StaffingScoringAgent implements ScoringAgent {
@Override
public double score(Phc phc) {

    double doctorAvailability =
            (double) phc.getDoctorsAvailable()
                    / phc.getDoctorsRequired();

    double nurseAvailability =
            (double) phc.getNursesAvailable()
                    / phc.getNursesRequired();

    double doctorScore =
            (1 - doctorAvailability) * 100;

    double nurseScore =
            (1 - nurseAvailability) * 100;

    return (doctorScore + nurseScore) / 2;
}

    @Override
    public String dimensionName() {
        return "Staffing";
    }
}