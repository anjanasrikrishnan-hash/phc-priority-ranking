package com.phc.priorityranking.model;

public class RankedPhc {

    private int rank;
    private String id;
    private String name;

    private double infrastructureScore;
    private double patientLoadScore;
    private double staffingScore;
    private double finalPriorityScore;

    private String priorityLevel;

    public RankedPhc(
            int rank,
            String id,
            String name,
            double infrastructureScore,
            double patientLoadScore,
            double staffingScore,
            double finalPriorityScore) {

        this.rank = rank;
        this.id = id;
        this.name = name;
        this.infrastructureScore = infrastructureScore;
        this.patientLoadScore = patientLoadScore;
        this.staffingScore = staffingScore;
        this.finalPriorityScore = finalPriorityScore;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getInfrastructureScore() {
        return infrastructureScore;
    }

    public void setInfrastructureScore(double infrastructureScore) {
        this.infrastructureScore = infrastructureScore;
    }

    public double getPatientLoadScore() {
        return patientLoadScore;
    }

    public void setPatientLoadScore(double patientLoadScore) {
        this.patientLoadScore = patientLoadScore;
    }

    public double getStaffingScore() {
        return staffingScore;
    }

    public void setStaffingScore(double staffingScore) {
        this.staffingScore = staffingScore;
    }

    public double getFinalPriorityScore() {
        return finalPriorityScore;
    }

    public void setFinalPriorityScore(double finalPriorityScore) {
        this.finalPriorityScore = finalPriorityScore;
    }

    public String getPriorityLevel() {
        return priorityLevel;
    }

    public void setPriorityLevel(String priorityLevel) {
        this.priorityLevel = priorityLevel;
    }
}