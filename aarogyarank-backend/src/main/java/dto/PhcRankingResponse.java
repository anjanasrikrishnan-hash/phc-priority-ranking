package com.phc.priorityranking.dto;

/**
 * The JSON object returned to the frontend for each PHC.
 * Field names here must match the locked team contract exactly.
 */
public class PhcRankingResponse {

    private String id;
    private String name;
    private double finalScore;
    private int rank;
    private double infraScore;
    private double loadScore;
    private double staffingScore;
    private String criticalDimension;
    private String explanation;

    public PhcRankingResponse() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getFinalScore() { return finalScore; }
    public void setFinalScore(double finalScore) { this.finalScore = finalScore; }

    public int getRank() { return rank; }
    public void setRank(int rank) { this.rank = rank; }

    public double getInfraScore() { return infraScore; }
    public void setInfraScore(double infraScore) { this.infraScore = infraScore; }

    public double getLoadScore() { return loadScore; }
    public void setLoadScore(double loadScore) { this.loadScore = loadScore; }

    public double getStaffingScore() { return staffingScore; }
    public void setStaffingScore(double staffingScore) { this.staffingScore = staffingScore; }

    public String getCriticalDimension() { return criticalDimension; }
    public void setCriticalDimension(String criticalDimension) { this.criticalDimension = criticalDimension; }

    public String getExplanation() { return explanation; }
    public void setExplanation(String explanation) { this.explanation = explanation; }
}