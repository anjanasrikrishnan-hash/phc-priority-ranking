package com.phc.priorityranking.agent;

import com.phc.priorityranking.model.PHC;

/**
 * Common contract for all specialist agents.
 * Each agent inspects a PHC and assigns a 0-100 urgency sub-score
 * for its own area of expertise.
 */
public interface Agent {

    /**
     * Computes this agent's urgency sub-score for the given PHC
     * and writes it back onto the PHC object.
     *
     * @param phc the Primary Health Centre to evaluate
     * @return the computed score (0-100, higher = more urgent)
     */
    double evaluate(PHC phc);
}
