Homepage for olaftrommer.de
================

## Development

You may either develop locally or you can use the provided vagrant setup.

### Developing with vagrant

#### Requirements

* [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* [VirtualBox Extension Pack](http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html#extpack)
* [Vagrant](http://downloads.vagrantup.com/)
* vagrant-vbguest - ```vagrant plugin install vagrant-vbguest```

#### Setup

Clone repository  
```{repo_url}```

Boot and provision vagrant box
```cd {project_name}/dev-env/vagrant```  
```vagrant up --provision```

Ssh into dev box and setup project  
```vagrant ssh```  
```cd projects```  
```git clone {repo_url}```  
```cd es-hackfest-page/app```

An nfs share is provided under ```nfs://{hostname}/home/vagrant/projects/```  

### Developing locally

#### Requirements

* [jekyll](http://jekyllrb.com/) - ```gem install jekyll```
* [sass](http://sass-lang.com/install) - ```gem install sass```
* [nokogiri](https://rubygems.org/gems/nokogiri) - ```gem install nokogiri```
* [rdiscount](https://rubygems.org/gems/rdiscount) - ```gem install rdiscount```

#### Setup

Clone repository  

After making changes to the site, you must deploy by calling: ```make```.

## Deploying changes

When you have finished making changes to the site and want to publish them call ```make deploy```.
Then copy and commit the pub directory's contents to the gh-pages branch.
