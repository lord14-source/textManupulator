#include<bits/stdc++.h>
using namespace std;
#define ll long long int
#define ull unsigned long long
#define surukro() int t;cin>>t;while(t-->0) 
#define speed ios_base::sync_with_stdio(false);   cin.tie(NULL);   cout.tie(NULL);
#define endl "\n" 
#define mod 1000000007


int main()
{
   speed
   int t;
   cin>>t;
   
   while(t-->0){
       int ct=0;
       int n;
       cin>>n;
       int a[n];
       for(int i=0;i<n;i++){
           cin>>a[i];
       }
       for(int i=0;i<n;i++)
           {
               if(a[i]^a[i+1]<a[i]&a[i+1]){ct++;
               }}
               
           
       
       cout<<ct<<endl;
       
   }
   return 0;
}                 