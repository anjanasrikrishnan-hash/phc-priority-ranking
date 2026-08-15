package com.phc.priorityranking.agent;
import com.phc.priorityranking.model.Phc;
import org.springframework.stereotype.Component;

@Component
public class InfraHealthScoringAgent implements ScoringAgent {

    @Override
    public double score(Phc phc) {

        double buildingProblem = 10 - phc.getBuildingCondition();

        double equipmentProblem = 10 - phc.getEquipmentScore();

        double electricityProblem =
                phc.getElectricity() == 1 ? 0 : 10;

        double waterProblem =
                phc.getWaterSupply() == 1 ? 0 : 10;

        double average =
                (buildingProblem +
                 equipmentProblem +
                 electricityProblem +
                 waterProblem) / 4.0;

        return average * 10;
    }

    @Override
    public String dimensionName() {
        return "Infrastructure";
    }
}