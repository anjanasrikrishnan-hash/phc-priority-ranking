package com.phc.priorityranking.model;

/**
 * Represents a Primary Health Centre with the raw data fields
 * used by the three specialist agents to compute urgency scores.
 */
public class PHC {

    private String phcId;
    private String name;
    private String district;

    // --- Fields used by InfraHealthAgent ---
    private int buildingConditionScore; // 0-10, lower = worse condition
    private boolean hasElectricity;
    private boolean hasWaterSupply;
    private int equipmentAvailabilityScore; // 0-10

    // --- Fields used by PatientLoadAgent ---
    private int monthlyPatientCount;
    private int bedCapacity;
    private double distanceToNearestHospitalKm;

    // --- Fields used by StaffingAgent ---
    private int doctorsAvailable;
    private int doctorsRequired;
    private int nursesAvailable;
    private int nursesRequired;

    // --- Computed scores (filled in by agents) ---
    private double infraScore;
    private double patientLoadScore;
    private double staffingScore;
    private double finalPriorityScore;

    public PHC() {
    }

    public PHC(String phcId, String name, String district) {
        this.phcId = phcId;
        this.name = name;
        this.district = district;
    }

    // Getters and setters

    public String getPhcId() { return phcId; }
    public void setPhcId(String phcId) { this.phcId = phcId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public int getBuildingConditionScore() { return buildingConditionScore; }
    public void setBuildingConditionScore(int buildingConditionScore) { this.buildingConditionScore = buildingConditionScore; }

    public boolean isHasElectricity() { return hasElectricity; }
    public void setHasElectricity(boolean hasElectricity) { this.hasElectricity = hasElectricity; }

    public boolean isHasWaterSupply() { return hasWaterSupply; }
    public void setHasWaterSupply(boolean hasWaterSupply) { this.hasWaterSupply = hasWaterSupply; }

    public int getEquipmentAvailabilityScore() { return equipmentAvailabilityScore; }
    public void setEquipmentAvailabilityScore(int equipmentAvailabilityScore) { this.equipmentAvailabilityScore = equipmentAvailabilityScore; }

    public int getMonthlyPatientCount() { return monthlyPatientCount; }
    public void setMonthlyPatientCount(int monthlyPatientCount) { this.monthlyPatientCount = monthlyPatientCount; }

    public int getBedCapacity() { return bedCapacity; }
    public void setBedCapacity(int bedCapacity) { this.bedCapacity = bedCapacity; }

    public double getDistanceToNearestHospitalKm() { return distanceToNearestHospitalKm; }
    public void setDistanceToNearestHospitalKm(double distanceToNearestHospitalKm) { this.distanceToNearestHospitalKm = distanceToNearestHospitalKm; }

    public int getDoctorsAvailable() { return doctorsAvailable; }
    public void setDoctorsAvailable(int doctorsAvailable) { this.doctorsAvailable = doctorsAvailable; }

    public int getDoctorsRequired() { return doctorsRequired; }
    public void setDoctorsRequired(int doctorsRequired) { this.doctorsRequired = doctorsRequired; }

    public int getNursesAvailable() { return nursesAvailable; }
    public void setNursesAvailable(int nursesAvailable) { this.nursesAvailable = nursesAvailable; }

    public int getNursesRequired() { return nursesRequired; }
    public void setNursesRequired(int nursesRequired) { this.nursesRequired = nursesRequired; }

    public double getInfraScore() { return infraScore; }
    public void setInfraScore(double infraScore) { this.infraScore = infraScore; }

    public double getPatientLoadScore() { return patientLoadScore; }
    public void setPatientLoadScore(double patientLoadScore) { this.patientLoadScore = patientLoadScore; }

    public double getStaffingScore() { return staffingScore; }
    public void setStaffingScore(double staffingScore) { this.staffingScore = staffingScore; }

    public double getFinalPriorityScore() { return finalPriorityScore; }
    public void setFinalPriorityScore(double finalPriorityScore) { this.finalPriorityScore = finalPriorityScore; }
}
