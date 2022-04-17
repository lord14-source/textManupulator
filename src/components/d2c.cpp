#include<bits/stdc++.h>
using namespace std;
#define ll long long int
#define ull unsigned long long
#define surukro() int t;cin>>t;while(t-->0) 
#define speed ios_base::sync_with_stdio(false);   cin.tie(NULL);   cout.tie(NULL);
#define endl "\n" 
#define mod 1000000007
int number(int n){
    int k=0;
    while(n>0){
        n=n/10;
        k++;
    }
    return k;


}

int main()
{
   speed
   int t;
   cin>>t;
   vector<int>v;

   while(t-->0){
       int c;
       cin>>c;
       int ct=0;
        int sum=0;
       int a[c];
      
       for(int i=0;i<c;i++){
           cin>>a[i];
       }

      for(int i=0;i<c;i++)
       {
           if(a[i]==a[i+1]){
               v.push_back(1);
               continue;
           }
       
          if(a[i]>a[i+1]){
              int h=a[i]-a[i+1];
             int m= number(h);
             v.push_back(m);
            ct++;
             a[i+1]=(a[i+1]*pow(10,m));}}
           
           
          for(int i=0;i<v.size()-1;i++){
              

              sum+=v[i];

          }
       
      
       cout<<sum<<endl;
   }
   return 0;
}                 