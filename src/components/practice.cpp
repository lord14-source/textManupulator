#include<bits/stdc++.h>
using namespace std;
int main(){
    string s;
    int n,k;
    cin>>n>>k;
    string c="abcdefghijklmnopqrstuvwxyz";
    map<int,char>m;
    for(int i=1;i<c.size();i++){
        m.insert({i,c[i]});
            }
           /* for(int i=0;i<n-1;i++){
                s[i]='a';
            }
            int o=k-n+1;
            cout<<o<<endl;
            if(o<=26){
                s[n-1]=m[o];
            }
            for(int i=0;i<n;i++){
                cout<<s[i]<<endl;
            }*/
            for(auto val:m){
                cout<<val.first<<" "<<val.second<<endl;
            }

}