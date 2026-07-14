package com.phc.priorityranking.agent;

import com.phc.priorityranking.model.PHC;
import org.springframework.stereotype.Component;

/**
 * Evaluates the physical/infrastructure health of a PHC:
 * building condition, electricity, water supply, equipment.
 * Worse infrastructure -> higher urgency score.
 */
@Component
public class InfraHealthAgent implements Agent {

    @Override
    public double evaluate(PHC phc) {
        // Building condition: invert so lower condition = higher urgency (0-10 -> 0-40)
        double buildingUrgency = (10 - phc.getBuildingConditionScore()) * 4.0;

        // Missing electricity/water are big red flags
        double electricityUrgency = phc.isHasElectricity() ? 0 : 20;
        double waterUrgency = phc.isHasWaterSupply() ? 0 : 15;

        // Equipment shortage
        double equipmentUrgency = (10 - phc.getEquipmentAvailabilityScore()) * 2.5;

        double score = buildingUrgency + electricityUrgency + waterUrgency + equipmentUrgency;
        score = Math.min(100, Math.max(0, score));

        phc.setInfraScore(score);
        return score;
    }
}
