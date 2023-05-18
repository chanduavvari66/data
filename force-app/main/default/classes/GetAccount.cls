public with sharing class GetAccount {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Phone from Account LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterRating(String rating){
        return [SELECT Id, Name, Rating from Account WHERE Rating=:rating LIMIT 2];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, AnnualRevenue from Account];
    }
}