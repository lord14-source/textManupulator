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
       
       long long a,b,c,d;
       cin>>a>>b>>c>>d;
        
       
       vector<long long>v;
       v.push_back(a);
       v.push_back(b);
       v.push_back(c);
       v.push_back(d);
       sort(v.begin(),v.end());
       long long x=((v[2]+v[0])/2);
       long long y=v[2]-x;
       long long z=((v[2]+v[1])/2);
       long long e=v[2]-z;
       long long f=((v[3]+v[0])/2);
       long long g=v[3]-f;
       long long h=((v[3]+v[1])/2);
       long long i=v[3]-h;
       if((f%1==0&&f!=0)&&(g%1==0&&g!=0)){
           if(f/g==v[1]&&f*g==v[3]&&f>=1&&g>=1&&f<=10000&&g<=10000)
           {cout<<f<<" "<<g<<endl;
           continue;
       }}
       if((z%1==0&&z!=0)&&(e%1==0&&e!=0)){
       if(z/e==v[1]&&z*e==v[3]&&z>=1&&e>=1&&z<=10000&&e<=10000){
           cout<<z<<" "<<e<<endl;continue;
       }}
        if((x%1==0&&x!=0)&&(y%1==0&&y!=0)){
       if(x/y==v[1]&&x*y==v[3]&&x>=1&&y>=1&&x<=10000&&y<=10000){
           cout<<x<<" "<<y<<endl;continue;
       }}
       if((h%1==0&&h!=0)&&(i%1==0&&i!=0)){
       if(h/i==v[1]&&h*i==v[3]&&h>=1&&i>=1&&h<=10000&&i<=10000){
           cout<<h<<" "<<i<<endl;continue;
       }}
       cout<<-1<<" "<<-1<<endl;
       
           
          
       
       
     
       
       
      
       
   }
   return 0;
}