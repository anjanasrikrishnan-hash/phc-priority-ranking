package com.phc.priorityranking.agent;

import com.phc.priorityranking.model.Phc;

public interface ScoringAgent {

    double score(Phc phc);

    String dimensionName();
}