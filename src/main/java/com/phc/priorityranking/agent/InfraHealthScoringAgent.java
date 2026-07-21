package com.phc.priorityranking.agent;

import com.phc.priorityranking.model.Phc;
import org.springframework.stereotype.Component;

@Component
public class InfraHealthScoringAgent implements ScoringAgent {

    @Override
    public double score(Phc phc) {
        return 0; // real formula: Day 2-3
    }

    @Override
    public String dimensionName() {
        return "Infrastructure";
    }
}